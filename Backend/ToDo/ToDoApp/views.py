from django.shortcuts import render
from .models import ToDo, Category
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework import status, generics
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from .serializers import RegisterSerializer, ToDoSerializer, CategorySerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


@api_view(['POST'])
def CreateTask(request):
    newTask = {
        'title': request.data['title'],
        'description': request.data['description'],
        'category': request.data['category']['id']
    }
    newTask_serializer = ToDoSerializer(data=newTask)
    if newTask_serializer.is_valid():
        newTask_serializer.save()
        return Response(newTask_serializer.data)
    return Response(newTask_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE', 'PUT'])
def CRUDTask(request, pk):
    
    try:
        task = ToDo.objects.get(pk=pk)
    except ToDo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if (request.method == 'DELETE'):
        task.delete()
        return JsonResponse({'message': 'Task was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'PUT':
        newTask = {
            'title': request.data['title'],
            'category': request.data['category']['id'],
            'description': request.data['description']
            }
        newTask_serializer = ToDoSerializer(task, data=newTask)
        if newTask_serializer.is_valid():
            newTask_serializer.save()
            return Response(newTask_serializer.data)
        return Response(newTask_serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['DELETE', 'PUT'])
def CRUDCategory(request, pk):
    
    try:
        category = Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if (request.method == 'DELETE'):
        category.delete()
        return JsonResponse({'message': 'Category was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'PUT':
        newCategory = {
            'title': request.data['title'],
            }
        newCategory_serializer = CategorySerializer(category, data=newCategory)
        if newCategory_serializer.is_valid():
            newCategory_serializer.save()
            return Response(newCategory_serializer.data)
        return Response(newCategory_serializer.errors, status=status.HTTP_400_BAD_REQUEST)





@api_view(['POST'])
def CreateCategory(request):
    newCategory = {
        'title': request.data['title'],
    }
    newCategory_serializer = ToDoSerializer(data=newCategory)
    if newCategory_serializer.is_valid():
        newCategory_serializer.save()
        return Response(newCategory_serializer.data)
    return Response(newCategory_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
