import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# ✅ Postmark SMTP settings
smtp_server = 'smtp.postmarkapp.com'
smtp_port = 2525  # You can also try 2525 or 465
smtp_user = '2e6d54f1-833b-4260-86d2-1cb16b32c50e'  # Your Postmark server token
smtp_password = '2e6d54f1-833b-4260-86d2-1cb16b32c50e'  # Same as above

sender_email = 'Okka.fraile@clairitylab.ai'  # Must be verified in Postmark
receiver_email = 'Okka.fraile@clairitylab.ai'
subject = 'Test Email from Python via Postmark'
body = 'Hello Umair, this is a test email sent using Postmark SMTP and Python.'

# Compose the message
msg = MIMEMultipart()
msg['From'] = sender_email
msg['To'] = receiver_email
msg['Subject'] = subject
msg.attach(MIMEText(body, 'plain'))

# Send the message
try:
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.sendmail(sender_email, receiver_email, msg.as_string())
        print('✅ Email sent successfully via Postmark!')
except Exception as e:
    print(f'❌ Failed to send email via Postmark: {e}')
