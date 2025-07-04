from django.shortcuts import render
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.http import JsonResponse
from .models import Assessment
import json
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv
import os
import json
import requests
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Load environment variables from .env file
load_dotenv()
smtp_server = 'smtp.postmarkapp.com'
smtp_port = 2525
smtp_user = '2e6d54f1-833b-4260-86d2-1cb16b32c50e'  # Server API token
smtp_password = '2e6d54f1-833b-4260-86d2-1cb16b32c50e'
sender_email = 'Okka.fraile@clairitylab.ai'  # Must be verified
receiver_email = 'Okka.fraile@clairitylab.ai'  # You can change this if needed
API_KEY = os.getenv("SYSTEM_API_KEY")
TAG_NAME = os.getenv("TAG_NAME")
CLICKUP_ACCESS_TOKEN = os.getenv("CLICKUP_ACCESS_TOKEN")
CLICKUP_LIST_ID = os.getenv("CLICKUP_LIST_ID")
# Tag name to ID mapping
TAG_MAP = {
    "stage-1": 1543668
}


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def services(request):
    return render(request, 'services.html')


def credentials(request):
    return render(request, 'credientials.html')


def blog(request):
    return render(request, 'blog.html')


def contact(request):
    return render(request, 'contact.html')


def privacy(request):
    return render(request, 'privacy.html')


def terms(request):
    return render(request, 'terms.html')


def cookies(request):
    return render(request, 'cookies.html')


def industries(request):
    return render(request, 'industries.html')


def assessment_form(request):
    return render(request, 'assessment_form.html')


@csrf_exempt
def submit_assessment(request):
    print(API_KEY)
    print('::::::::::::::::::::::::')
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        answers = data.get('answers')
        score = calculate_score(answers)

        assessment = Assessment.objects.create(email=email, answers=answers, score=score)
        # send_readiness_email(email, assessment.id)
        return JsonResponse({'redirect_url': f'summary/{assessment.id}/'})
    return JsonResponse({'error': 'Invalid method'}, status=400)


def summary(request, assessment_id):
    assessment = Assessment.objects.get(pk=assessment_id)
    return render(request, 'summary.html', {'assessment': assessment})


def calculate_score(answers):
    return sum(answers.values())  # simple score logic


def create_contact(email):
    url = "https://api.systeme.io/api/contacts"
    headers = {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json"
    }
    data = {"email": email}
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 201:
        return response.json().get("id"), None
    return None, response.text


def assign_tag(contact_id, tag_id):
    url = f"https://api.systeme.io/api/contacts/{contact_id}/tags"
    headers = {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json"
    }
    data = {"tagId": tag_id}
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 204:
        return True, None
    return False, response.text


@csrf_exempt
def add_contact_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")

            if not email:
                return JsonResponse({"error": "Email is required"}, status=400)

            tag_id = TAG_MAP.get(TAG_NAME)
            if not tag_id:
                return JsonResponse({"error": "Tag not found"}, status=400)

            contact_id, error = create_contact(email)

            if not contact_id:
                print("Contact creation failed:", error)  # 👈 Add this
                return JsonResponse({"error": f"Failed to create contact: {error}"}, status=400)

            success, error = assign_tag(contact_id, tag_id)
            if not success:
                return JsonResponse({"error": f"Failed to assign tag: {error}"}, status=400)

            return JsonResponse({"message": "Contact added and tagged successfully", "contact_id": contact_id})

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

    return JsonResponse({"error": "Only POST method allowed"}, status=405)


@csrf_exempt
def create_clickup_task(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode('utf-8'))

            # Extract required fields
            name = data.get('name', 'Anonymous')
            email = data.get('email')
            score = data.get('score')
            strategy = data.get('strategy')
            people = data.get('people')
            data_score = data.get('data')
            governance = data.get('governance')

            # Validate required fields
            if not all([email, score, strategy, people, data_score, governance]):
                return JsonResponse({'error': 'Missing one or more required fields.'}, status=400)

            # Build task description (used for both ClickUp and Email)
            task_description = (
                f"📩 Email: {email}\n"
                f"📊 Overall Score: {score}/20\n\n"
                f"🧠 Strategy: {strategy}/20\n"
                f"👥 People: {people}/20\n"
                f"💾 Data: {data_score}/20\n"
                f"🛡️ Governance: {governance}/20\n"
            )

            # ✅ Send Email via Postmark SMTP
            try:
                msg = MIMEMultipart()
                msg['From'] = sender_email
                msg['To'] = receiver_email
                msg['Subject'] = f'New AI Readiness Lead - {email}'
                msg.attach(MIMEText(task_description, 'plain'))

                with smtplib.SMTP(smtp_server, smtp_port) as server:
                    server.starttls()
                    server.login(smtp_user, smtp_password)
                    server.sendmail(sender_email, receiver_email, msg.as_string())
            except Exception as e:
                return JsonResponse({
                    'error': 'Failed to send email via Postmark',
                    'exception': str(e)
                }, status=500)

            # ✅ Create ClickUp task (unchanged)
            task_payload = {
                "name": f"AI Readiness Lead - {email}",
                "description": task_description,
                "status": "to do",
                "priority": 3
            }

            url = f'https://api.clickup.com/api/v2/list/{CLICKUP_LIST_ID}/task'
            headers = {
                "Authorization": CLICKUP_ACCESS_TOKEN,
                "Content-Type": "application/json"
            }
            response = requests.post(url, headers=headers, json=task_payload)

            if response.status_code in [200, 201]:
                return JsonResponse({
                    'message': '✅ Task created and email sent successfully!',
                    'clickup_response': response.json()
                }, status=201)
            else:
                return JsonResponse({
                    'error': '❌ ClickUp API error',
                    'details': response.text
                }, status=400)

        except Exception as e:
            return JsonResponse({
                'error': 'Server error',
                'exception': str(e)
            }, status=500)

    return JsonResponse({"error": "Only POST method allowed"}, status=405)
