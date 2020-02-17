from django.db import models

# Create your models here.


class Student(models.Model):
    Name = models.CharField('Student Name', max_length=1000, )
    email = models.EmailField('email')
    phone_number = models.CharField('Phone Number', max_length=1000)
    registration_date = models.DateTimeField('RegistrationDate Time', auto_now_add=True, )


def __str__(self):
    return self.Name
