from django.shortcuts import render
from .models import Question_Pages
from django.http import HttpResponse
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_exempt,ensure_csrf_cookie


cans=[]
Questions = Question_Pages.objects.order_by('Qid')
for i in Questions:
    cans.append(i.ans)
uans=['dummy'] * Questions.count()

@ensure_csrf_cookie
def QuesionMCQ(request):
    Questions = Question_Pages.objects.order_by('Qid')
    Total_Question = Questions.count()
    paginator = Paginator(Questions,1)
    page = request.GET.get('q')
    Questions = paginator.get_page(page)
    return render(request,'MCQ/index.html',{'Questions':Questions,'Total_Question':Total_Question,'Qno':page})


def savechoice(request):
    if request.method == 'POST':
        ans = request.POST.get('ans')
        page = request.POST.get('page')
        print(page,'---------------')
        if(ans!='dummy'):
            uans[int(page)-1]=ans
    return HttpResponse('?q='+str(int(page)+1),'plain/text')

def result(request):
    if request.method=='POST':
        ans = request.POST.get('ans')
        page = request.POST.get('page')
        print(page,'----------------\n')
        if(ans!='dummy'):
            uans[int(page)-1]=ans
        return HttpResponse('/result','plain/text')
    else:
        score = 0
        for i in range(Questions.count()):
            if uans[i]==cans[i]:
                score+=1
        return render(request,'Results.html',{'score':score})

