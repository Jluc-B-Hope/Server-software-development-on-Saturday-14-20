from django.db import models

class Employee(models.Model):
    full_name = models.CharField(max_length=255, null=False)
    position = models.CharField(max_length=255, default=False, null=False)
    salary = models.IntegerField(null=False)

    class Meta:
        verbose_name = 'Employee'
        verbose_name_plural = 'Employees'

    def __str__(self):
        return 'ID: {}, Name: {}'.format(self.id, self.name)

