from student.models import *
from rest_framework.serializers import ModelSerializer


class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = ('pk', 'Name', 'email', 'phone_number', 'registration_date')
