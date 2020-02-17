from django.shortcuts import render
from rest_framework import serializers
from student.models import *
from rest_framework.response import Response
# Create your views here.
from rest_framework.decorators import api_view
from student.serializers import StudentSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404


@api_view(['GET', 'POST'])
def student_list(request):
    if request.method == 'GET':
        student_obj = Student.objects.all()
        student_serializer = StudentSerializer(student_obj, many=True)

        return Response(student_serializer.data)

    if request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view (['PUT','DELETE'])
def student_details(request, pk):
    try:
        stu_obj = Student.objects.get(id=pk)

    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        student_serializer = StudentSerializer(stu_obj, data=request.data)
        if student_serializer.is_valid():
            student_serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        stu_obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)






