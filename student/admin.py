from django.contrib import admin
from student.models  import *
# Register your models here.


class StudentAdmin(admin.ModelAdmin):
    list_display = ['Name', 'registration_date']
    list_per_page = 20
    search_fields = ['Name']
    list_filter = ["registration_date"]
    readonly_fields = ['registration_date']

admin.site.register(Student, StudentAdmin)