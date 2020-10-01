from django.db import models

class Question_Pages(models.Model):
    Qid = models.BigIntegerField()
    Question = models.CharField(max_length=200)
    o_1 = models.CharField(max_length=100)
    o_2 = models.CharField(max_length=100)
    o_3 = models.CharField(max_length=100)
    o_4 = models.CharField(max_length=100)
    ans = models.CharField(max_length=100)
    