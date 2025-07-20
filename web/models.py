from django.db import models

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