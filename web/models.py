from django.db import models
from django.contrib.auth.models import User

class AIReadinessLead(models.Model):
    email = models.EmailField()
    score = models.FloatField()
    strategy = models.IntegerField()
    people = models.IntegerField()
    data_score = models.IntegerField()
    governance = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email


class ContactMessage(models.Model):
    email = models.EmailField()
    message = models.TextField(max_length=2000)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.email} - {self.submitted_at.strftime('%Y-%m-%d %H:%M')}"


def blog_image_upload_path(instance, filename):
    return f'blogs/images/{instance.title}/{filename}'

def blog_pdf_upload_path(instance, filename):
    return f'blogs/pdfs/{instance.title}/{filename}'

class Blog(models.Model):
    title = models.CharField(max_length=255, unique=True)
    small_description = models.TextField(max_length=500)
    image = models.ImageField(upload_to=blog_image_upload_path, blank=True, null=True)
    pdf = models.FileField(upload_to=blog_pdf_upload_path, blank=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blogs')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title