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
]
