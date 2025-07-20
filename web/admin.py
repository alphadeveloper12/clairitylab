from django.contrib import admin
from .models import AIReadinessLead
from django.contrib import admin
from .models import ContactMessage


@admin.register(AIReadinessLead)
class AIReadinessLeadAdmin(admin.ModelAdmin):
    list_display = ('email', 'score', 'strategy', 'people', 'data_score', 'governance', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('email',)
    ordering = ('-created_at',)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('email', 'submitted_at')
    search_fields = ('email', 'message')
    ordering = ('-submitted_at',)
