from django.urls import path
from .views import get_random_meal_plan

urlpatterns = [
    path('get_random_meal_plan', get_random_meal_plan, name='get_random_meal_plan')
]