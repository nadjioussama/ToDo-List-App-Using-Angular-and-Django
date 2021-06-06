from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=75, verbose_name='Category Title')

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ['-id']

    def __str__(self):
        return str(self.title)


class ToDo(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Category')
    title = models.CharField(max_length=75)
    description = models.TextField()
    
    class Meta:
        verbose_name = 'ToDo Title'
        verbose_name_plural = 'ToDos Titles'
        ordering = ['-id']


    def __str__(self):
        return str(self.title)
