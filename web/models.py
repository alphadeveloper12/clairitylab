# quiz/models.py
from django.db import models

class Assessment(models.Model):
    email = models.EmailField()
    answers = models.JSONField()
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
