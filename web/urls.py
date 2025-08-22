from django.urls import path
from .views import *
from django.views.static import serve
from django.conf import settings


urlpatterns = [
    path('', index, name='home'),
    path('about/', about, name='about'),
    path('services/', services, name='services'),
    path('credentials/', credentials, name='credentials'),
    path('blog/', blog, name='blog'),
    path('contact/', contact, name='contact'),
    path('privacy-policy/', privacy, name='privacy'),
    path('terms/', terms, name='terms'),
    path('blog/1', blog1, name='blog1'),
    path('blog/2', blog2, name='blog2'),
    path('blog/3', blog3, name='blog3'),
    path('blog/4', blog4, name='blog4'),
    path('cookies-policy/', cookies, name='cookies'),
    path('industries/', industries, name='industries'),
    path('assessment/', assessment_form, name='assessment_form'),
    path('add_contact/', add_contact_view, name='add-contact'),
    path('api/create-clickup-task/', create_clickup_task, name='create_clickup_task'),
    path('api/contact/', contact_message_api, name='contact_message_api'),
    path('blogs/<int:blog_id>/', blog_detail, name='blog_detail'),
    path(
        "google231cd1ac976a81b9.html",
        serve,
        {"path": "google231cd1ac976a81b9.html", "document_root": os.path.join(settings.BASE_DIR, "staticfiles")},
    ),

]
