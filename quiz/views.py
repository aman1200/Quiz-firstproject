from django.http import HttpResponse
from django.shortcuts import render
class quizstart():
    def Home(request):
        return render(request,'home.html')