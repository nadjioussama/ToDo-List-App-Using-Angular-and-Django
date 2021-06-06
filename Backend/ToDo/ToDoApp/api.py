from rest_framework import viewsets, generics, views
from django.contrib.auth.models import User
from .models import Category, ToDo
from .serializers import RegisterSerializer, CategorySerializer, ToDoSerializer



class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class TodoViewset(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer


