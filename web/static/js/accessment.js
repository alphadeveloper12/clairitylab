const categories = [
    "Strategy", "Strategy", "Strategy", "Strategy",
    "People", "People", "People", "People",
    "Data", "Data", "Data", "Data",
    "Governance", "Governance", "Governance", "Governance",
    "Email"
];

const questions = [
    "Does your company have a clear AI strategy aligned with business goals and supported by leadership?",
    "Have you identified specific business processes where AI could drive efficiency or competitive advantage?",
    "Has your organization allocated dedicated budget and resources for AI initiatives and pilot projects?",
    "Do you have defined success metrics and ROI expectations for AI implementations?",
    "Is your company culture and workforce prepared for AI adoption, with a plan to manage change?",
    "Do employees view AI as a valuable tool to enhance their work, and do you have access to AI expertise?",
    "Does your organization have dedicated AI talent (data scientists, ML engineers) or partnerships with AI specialists?",
    "Are there training programs in place to upskill employees on AI tools and concepts?",
    "Is your data clean, accessible, and integrated with analytics tools to support AI initiatives?",
    "Do you have scalable IT infrastructure and cybersecurity measures to support AI workloads?",
    "Can your organization easily collect, store, and process the volume of data needed for AI applications?",
    "Do you have established data governance practices and quality assurance processes?",
    "Are you equipped to comply with data privacy regulations (e.g., GDPR, EU AI Act, UAE laws) for AI use?",
    "Do you have policies to ensure ethical AI use and mitigate risks like bias or data breaches?",
    "Has your organization established clear guidelines for AI decision-making and human oversight?",
    "Do you have processes to monitor, audit, and validate AI system performance and outcomes?",
    "Please enter your email to receive the results."
];

const answers = new Array(questions.length).fill(null);
let currentQuestion = 0;

const questionContainer = document.getElementById('question-container');
const questionNumber = document.getElementById('question__number');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('quizForm');
const spinner = document.getElementById('spinner');
const loadingMessage = document.getElementById('loadingMessage');
const progressBar = document.getElementById('progressBar');
const emailContainer = document.getElementById('emailContainer');

function updateProgressBar(index) {
    const percent = Math.floor(((index + 1) / questions.length) * 100);
    progressBar.style.width = `${percent}%`;
}

function getCategoryWeight(category) {
    switch (category) {
        case "Strategy":
            return 25;
        case "People":
            return 25;
        case "Data":
            return 30;
        case "Governance":
            return 20;
        default:
            return 0;
    }
}


function renderQuestion(index) {
    updateProgressBar(index);
    questionNumber.innerHTML = `Question ${index + 1} of ${questions.length}`;

    if (index === questions.length - 1) {
        // Email question
        questionContainer.innerHTML = `
            <label class="form-label question__number">Question ${index + 1} of ${questions.length}</label><br>
            <p class="category__p">Contact <span class="category__wight">Required</span></p>
            <p class="mb-3" style="color: #fff">${questions[index]}</p>
            <input type="email" name="email" id="emailInput" class="form-control" required placeholder="your@example.com" />
        `;
    } else {
        const savedAnswer = answers[index];
        questionContainer.innerHTML = `
    <label class="form-label question__number">Question ${index + 1} of ${questions.length}</label><br>
    <p class="category__p">
        ${categories[index]} <span class="category__wight">${getCategoryWeight(categories[index])}% weight</span>
    </p>
    <p class="mb-3 " style="color:#fff;">${questions[index]}</p>
    ${[5, 4, 3, 2, 1].map(val => `
        <label class="form-check ${savedAnswer == val ? 'selected' : ''}">
            <input class="form-check-input" type="radio" name="answer" value="${val}" ${savedAnswer == val ? 'checked' : ''} required>
            <span class="form-check-label">
                ${val === 1 ? 'Strongly Disagree' :
            val === 2 ? 'Disagree' :
                val === 3 ? 'Neutral' :
                    val === 4 ? 'Agree' : 'Strongly Agree'}
            </span>
        </label>`).join('')}
`;


        document.querySelectorAll('input[name="answer"]').forEach(input => {
            input.addEventListener('change', () => {
                document.querySelectorAll('.form-check').forEach(div => div.classList.remove('selected'));
                input.closest('.form-check').classList.add('selected');
            });
        });
    }

    prevBtn.disabled = index === 0;
    nextBtn.classList.toggle('d-none', index === questions.length - 1);
    submitBtn.classList.toggle('d-none', index !== questions.length - 1);
}


nextBtn.onclick = () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return alert("Please select an option.");
    answers[currentQuestion] = parseInt(selected.value);
    currentQuestion++;
    renderQuestion(currentQuestion);
};

prevBtn.onclick = () => {
    currentQuestion--;
    renderQuestion(currentQuestion);
};

submitBtn.onclick = function (e) {
    e.preventDefault();

    if (currentQuestion === questions.length - 1) {
        const emailInput = document.getElementById("emailInput");
        if (!emailInput || !emailInput.value) return alert("Please enter a valid email.");
        const email = emailInput.value;

        // Send email to contact API


        // Dummy value for email step
        answers[currentQuestion] = email;

        // Calculate scores
        const getScore = (start, end) => answers.slice(start, end + 1).reduce((a, b) => a + b, 0);
        const maxPerCategory = 20;

        const strategyRaw = getScore(0, 3);
        const peopleRaw = getScore(4, 7);
        const dataRaw = getScore(8, 11);
        const governanceRaw = getScore(12, 15);

        const strategyWeight = 0.25;
        const peopleWeight = 0.25;
        const dataWeight = 0.30;
        const governanceWeight = 0.20;

        const strategyPoints = (strategyRaw * strategyWeight).toFixed(1);
        const peoplePoints = (peopleRaw * peopleWeight).toFixed(1);
        const dataPoints = (dataRaw * dataWeight).toFixed(1);
        const governancePoints = (governanceRaw * governanceWeight).toFixed(1);

        const weightedScore = (
            parseFloat(strategyPoints) +
            parseFloat(peoplePoints) +
            parseFloat(dataPoints) +
            parseFloat(governancePoints)
        ).toFixed(1);

        // Save results to API
        fetch(addClickUp, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "",
                email: email,
                score: weightedScore,
                strategy: strategyRaw,
                people: peopleRaw,
                data: dataRaw,
                governance: governanceRaw
            })
        })
            .then(response => response.json())
            .then(data => {
                window.contactApiMessage = data.message || data.error || 'No response from server';
            })
            .catch(error => {
                window.contactApiMessage = 'Request failed: ' + error.message;
            });

        let level = '';
        let tag_name = '';

        if (weightedScore <= 11.0) {
            level = '🔴 Beginner';
            tag_name = 'skill-beginner';
        } else if (weightedScore <= 16.0) {
            level = '🟠 Intermediate';
            tag_name = 'skill-intermediate';
        } else {
            level = '🟢 Advanced';
            tag_name = 'skill-advanced';
        }

        fetch(addContactUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                tag_name: tag_name  // 👈 dynamically set based on score
            })
        })
        .then(response => response.json())
        .then(data => {
            window.contactApiMessage = data.message || data.error || 'No response from server';
        })
        .catch(error => {
            window.contactApiMessage = 'Request failed: ' + error.message;
        });

        // Dynamic analysis content
        let analysisTitle = '';
        let analysisText = '';
        let recommendations = [];

        if (weightedScore <= 11.0) {
            analysisTitle = 'Beginner-Level Recommendations';
            analysisText = 'Your organization is at the beginning of its AI journey. Focus on foundational steps to build awareness, define direction, and prepare your data and governance structures.';
            recommendations = [
                'Define a clear AI vision aligned with business goals.',
                'Run executive workshops to raise awareness and set priorities.',
                'Identify internal champions for AI initiatives.',
                'Begin foundational AI literacy programs for leadership and staff.',
                'Conduct a data audit to assess availability, quality, and gaps.',
                'Create a basic data governance framework.',
                'Establish an AI task force to explore policies and risks.',
                'Start documenting AI-related decisions or use cases for accountability.'
            ];
        } else if (weightedScore <= 16.0) {
            analysisTitle = 'Intermediate-Level Recommendations';
            analysisText = 'Your organization has made solid progress. Focus on scaling successful use cases, building internal capability, and enhancing data and governance maturity.';
            recommendations = [
                'Prioritize 1–2 high-impact, measurable AI use cases.',
                'Develop a roadmap for scaling AI efforts organization-wide.',
                'Upskill relevant teams in applied AI and project delivery.',
                'Introduce AI roles or partner with external expertise.',
                'Improve data pipelines and accessibility across departments.',
                'Standardize metadata and improve labeling for training models.',
                'Define internal review processes for AI ethics and bias.',
                'Align with emerging regulations such as the EU AI Act and GDPR.'
            ];
        } else {
            analysisTitle = 'Advanced-Level Recommendations';
            analysisText = 'Your organization is well-positioned for advanced AI integration. Focus on scaling innovation, leading ethically, and optimizing your AI operations.';
            recommendations = [
                'Refine your AI portfolio to focus on ROI and scale-up potential.',
                'Explore competitive differentiators such as predictive AI and digital twins.',
                'Develop internal AI centers of excellence (CoE).',
                'Align performance reviews and KPIs with AI-driven outcomes.',
                'Optimize and automate data governance using AI/ML techniques.',
                'Invest in data security, privacy, and synthetic data strategies.',
                'Conduct regular audits and stress tests on AI systems.',
                'Lead by example: publish transparency reports or ethical scorecards.'
            ];
        }

        const recommendationsHTML = recommendations.map(r => `<li>${r}</li>`).join('');

        questionContainer.innerHTML = `
            <div class="text-center mb-4">
                <div id="scoreDisplay" class="score-display">${weightedScore}/20.0</div>
                <p style="font-size: 1.2rem;color: #fff; margin-bottom: 10px; font-style: italic">Weighted Readiness Score</p>
                <p style="font-size: 0.9rem;color: #9ca3af; margin-bottom: 20px; font-style: italic">Calculated using strategic category weights</p>
                <div id="readinessLevel" class="readiness-level level-moderate">${level}</div>
            </div>

            <div class="row g-4 text-center" style="margin-bottom: 50px">
                ${[
            ['Strategy', strategyRaw, strategyPoints, '25%', 'primary'],
            ['People', peopleRaw, peoplePoints, '25%', 'success'],
            ['Data', dataRaw, dataPoints, '30%', 'info'],
            ['Governance', governanceRaw, governancePoints, '20%', 'warning'],
        ].map(([name, raw, points, weight, color]) => `
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="category-card category-${name.toLowerCase()} p-3 h-100">
                            <h6>${name} <span class="badge bg-light text-dark">${weight} weight</span></h6>
                            <p class="mb-1 fw-bold">${raw}/20</p>
                            <p class="small" style="color:#fff;">
                                ${Math.round((raw / maxPerCategory) * 100)}% • Contributes ${points} pts
                            </p>
                            <div class="progress" style="height: 10px;">
                                <div class="bg-${color}" role="progressbar" style="width: ${Math.round((raw / maxPerCategory) * 100)}%"></div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="card bg-light text-dark p-4 mb-4">
                <h5 style="color: #000!important;">Your Weighted Assessment Analysis</h5>
                <p class="small">${analysisText}</p>

                <h6 class="mt-4" style="color: #000!important;">${analysisTitle}</h6>
                <ul class="ps-3">${recommendationsHTML}</ul>

                <div class="alert alert-info small mt-4">
                    💡 <strong>Scoring Note:</strong> This assessment uses weighted scoring where <strong>Data (30%)</strong> and <strong>Strategy/People (25%)</strong> each have higher impact than <strong>Governance (20%)</strong>, reflecting real-world AI implementation priorities.
                </div>
            </div>

            <div class="text-center">
                <a href="${servicesUrl}" class="btn btn-primary px-4">Take me back to ClairityLab</a>
            </div>
        `;
        sessionStorage.setItem("assessmentSubmitted", "true");

        progressBar.style.width = "100%";
        prevBtn.classList.add('d-none');
        nextBtn.classList.add('d-none');
        submitBtn.classList.add('d-none');
    } else {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (!selected) return alert("Please select an option.");
        answers[currentQuestion] = parseInt(selected.value);
    }
};


document.getElementById("startBtn").onclick = function () {
    document.getElementById("startScreen").classList.add("d-none");
    document.getElementById("quizSection").classList.remove("d-none");
    renderQuestion(currentQuestion);
};

