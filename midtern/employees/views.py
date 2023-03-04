from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from employees.models import Employee
from employees.serializers import EmployeesSerializer
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def employee1_handler(request):
    if request.method == 'GET':
        categories = Employee.objects.all()
        serializer = EmployeesSerializer(categories, many=True)
        return JsonResponse(serializer.data, status=200, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = EmployeesSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(data=serializer.data, status=200)
        return JsonResponse(data=serializer.errors, status=400)
    return JsonResponse({'message': 'Request is not supported'}, status=400)


def get_employees1(pk):
    try:
        employees = Employee.objects.get(id=pk)
        return {
            'status': 200,
            'employees': employees
        }
    except Employee.DoesNotExist as e:
        return {
            'status': 404,
            'employees': None
        }


@csrf_exempt
def employee2_handler(request, pk):
    result = get_employees1(pk)

    if result['status'] == 404:
        return JsonResponse({'message': 'Employees not found'}, status=404)

    employees = result['employees']

    if request.method == 'GET':
        serializer = EmployeesSerializer(employees)
        return JsonResponse(serializer.data, status=200)
    if request.method == 'PUT':
        data = json.loads(request.body)
        serializer = EmployeesSerializer(data=data, instance=employees)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(data=serializer.data)
        return JsonResponse(data=serializer.errors, status=400)
    if request.method == 'DELETE':
        employees.delete()
        return JsonResponse({'message': 'Employees deleted successfully!'})
    return JsonResponse({'message': 'Request is not supported'}, status=400)

