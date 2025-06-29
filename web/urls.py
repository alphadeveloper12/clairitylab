from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='home'),
    path('about/', about, name='about'),
    path('services/', services, name='services'),
    path('credentials/', credentials, name='credentials'),
    path('blog/', blog, name='blog'),
    path('contact/', contact, name='contact'),
    path('privacy-policy/', privacy, name='privacy'),
    path('terms/', terms, name='terms'),
    path('cookies-policy/', cookies, name='cookies'),
    path('industries/', industries, name='industries'),
    path('accessment/', assessment_form, name='assessment_form'),
    path('submit/', submit_assessment, name='submit_assessment'),
    path('accessment/summary/<int:assessment_id>/', summary, name='summary'),
    path('add_contact/', add_contact_view, name='add-contact'),
    path('api/create-clickup-task/', create_clickup_task, name='create_clickup_task'),
]
