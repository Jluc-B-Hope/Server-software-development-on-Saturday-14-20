from rest_framework import serializers
from employees.models import Employee


class EmployeesSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    full_name = serializers.CharField(min_length=5, max_length=200, allow_null=False)
    position = serializers.CharField(min_length=5, max_length=200, allow_null=False)
    salary = serializers.IntegerField(allow_null=False)

    def create(self, validated_data):
        employees = Employee(**validated_data)
        employees.save()
        return employees

    def update(self, instance, validated_data):
        instance.full_name = validated_data.get('full_name', instance.full_name)
        instance.save()
        return instance
