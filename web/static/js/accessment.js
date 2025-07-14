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


    // If it's the email step (last question)
    if (currentQuestion === questions.length - 1) {
        const emailInput = document.getElementById("emailInput");
        if (!emailInput || !emailInput.value) return alert("Please enter a valid email.");
        const email = emailInput.value;

        // 👉 Send POST request to Django API with the email
        fetch(addContactUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email})
        })
            .then(response => response.json())
            .then(data => {
                // Show backend response message on result card later
                window.contactApiMessage = data.message || data.error || 'No response from server';
            })
            .catch(error => {
                window.contactApiMessage = 'Request failed: ' + error.message;
            });

        // Send POST request to Django API with the email + scores


        // Store dummy value for the email step (to keep array length intact)
        answers[currentQuestion] = email;

        // Score calculation (same as before)
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
        fetch(addClickUp, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "",  // optional field, can leave empty or prompt user
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
        if (weightedScore <= 11.0) level = '🔴 Beginner';
        else if (weightedScore <= 16.0) level = '🟠 Moderate';
        else level = '🟢 Advanced';

        questionContainer.innerHTML = `
    <div class="text-center mb-4">
<div id="scoreDisplay" class="score-display">${weightedScore}/20.0</div>
        <p  style="font-size: 1.2rem;color: #fff; margin-bottom: 10px; font-style: italic">Weighted Readiness Score</p>
        <p style="font-size: 0.9rem;color: #9ca3af; margin-bottom: 20px; font-style: italic">Calculated using strategic category weights</p>
    <div id="readinessLevel" class="readiness-level level-moderate">${level}</div>
    </div>

<div class="row g-4 text-center">
    <div class="col-12 col-sm-6 col-lg-3">
      <div class="category-card category-strategy p-3 h-100">
        <h6>Strategy <span class="badge bg-light text-dark">25% weight</span></h6>
        <p class="mb-1 fw-bold">${strategyRaw}/20</p>
        <p class="small text-muted" style="color:#fff;">
          ${Math.round((strategyRaw / maxPerCategory) * 100)}% • Contributes ${strategyPoints} pts
        </p>
        <div class="progress" style="height: 10px;">
          <div class="bg-primary" role="progressbar" style="width: ${Math.round((strategyRaw / maxPerCategory) * 100)}%"></div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-3">
      <div class="category-card category-people p-3 h-100">
        <h6>People <span class="badge bg-light text-dark">25% weight</span></h6>
        <p class="mb-1 fw-bold">${peopleRaw}/20</p>
        <p class="small text-muted" style="color:#fff;">
          ${Math.round((peopleRaw / maxPerCategory) * 100)}% • Contributes ${peoplePoints} pts
        </p>
        <div class="progress" style="height: 10px;">
          <div class="bg-success" role="progressbar" style="width: ${Math.round((peopleRaw / maxPerCategory) * 100)}%"></div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-3">
      <div class="category-card category-data p-3 h-100">
        <h6>Data <span class="badge bg-light text-dark">30% weight</span></h6>
        <p class="mb-1 fw-bold">${dataRaw}/20</p>
        <p class="small text-muted" style="color:#fff;">
          ${Math.round((dataRaw / maxPerCategory) * 100)}% • Contributes ${dataPoints} pts
        </p>
        <div class="progress" style="height: 10px;">
          <div class="bg-info" role="progressbar" style="width: ${Math.round((dataRaw / maxPerCategory) * 100)}%"></div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-3">
      <div class="category-card category-governance p-3 h-100">
        <h6>Governance <span class="badge bg-light text-dark">20% weight</span></h6>
        <p class="mb-1 fw-bold">${governanceRaw}/20</p>
        <p class="small text-muted" style="color:#fff;">
          ${Math.round((governanceRaw / maxPerCategory) * 100)}% • Contributes ${governancePoints} pts
        </p>
        <div class="progress" style="height: 10px;">
          <div class="bg-warning" role="progressbar" style="width: ${Math.round((governanceRaw / maxPerCategory) * 100)}%"></div>
        </div>
      </div>
    </div>
  </div>


    <div class="card bg-light text-dark p-4 mb-4">
        <h5>Your Weighted Assessment Analysis</h5>
        <p class="small">
            Your organization shows good potential for AI adoption. Your weighted score indicates solid foundations with room for strategic improvements, particularly in areas with higher impact weights.
        </p>

        <h6 class="mt-4">Prioritized Recommendations</h6>
        <ul class="ps-3">
            <li>Strengthen data infrastructure and analytics capabilities (highest impact)</li>
            <li>Refine AI strategy with specific, measurable use cases</li>
            <li>Expand AI expertise and implement change management programs</li>
            <li>Enhance governance policies and risk management frameworks</li>
        </ul>

        <div class="alert alert-info small mt-4">
            💡 <strong>Scoring Note:</strong> This assessment uses weighted scoring where <strong>Data (30%)</strong> and <strong>Strategy/People (25%)</strong> each have higher impact than <strong>Governance (20%)</strong>, reflecting real-world AI implementation priorities.
        </div>
    </div>

    <div class="text-center">
        <button onclick="location.reload()" class="btn btn-primary px-4">Take Again</button>
    </div>
`;


        progressBar.style.width = "100%";
        prevBtn.classList.add('d-none');
        nextBtn.classList.add('d-none');
        submitBtn.classList.add('d-none');
    } else {
        // Regular question validation
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