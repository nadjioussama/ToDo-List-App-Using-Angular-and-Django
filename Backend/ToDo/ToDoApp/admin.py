from django.contrib import admin
from .models import Category, ToDo

admin.site.site_header = 'ToDo App Administration'
admin.site.index_title = 'ToDo App Administration'
admin.site.site_title = 'ToDo App'


admin.site.register(Category)
admin.site.register(ToDo)

