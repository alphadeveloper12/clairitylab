from .models import AIReadinessLead
from .models import ContactMessage
from django.contrib import admin
from .models import Blog
from django.utils.html import format_html


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


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_by', 'created_at', 'image_preview')
    search_fields = ('title','created_by__username')
    list_filter = ('created_by', 'created_at')
    readonly_fields = ('image_preview', 'created_at', 'updated_at')

    fieldsets = (
        ('Media', {
            'fields': ('image', 'pdf', 'image_preview')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="80" style="object-fit:cover;"/>', obj.image.url)
        return "No Image"
    image_preview.short_description = 'Preview'