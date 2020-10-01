from django.contrib import admin
from django.urls import path
from . import views
import MCQ.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.quizstart.Home),
    path('questions/',MCQ.views.QuesionMCQ),
    path('savechoice/',MCQ.views.savechoice),
    path('result/',MCQ.views.result),
]
