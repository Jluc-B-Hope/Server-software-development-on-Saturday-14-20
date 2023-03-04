from django.urls import path
from employees import views

urlpatterns = [
    path('api/employees', views.employee1_handler),
    path('api/employees/<int:pk>', views.employee2_handler)
]