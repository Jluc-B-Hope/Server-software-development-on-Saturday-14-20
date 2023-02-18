from django.urls import path
from online_shop import views

urlpatterns = [
    path('categories', views.categories_handler),
    path('categories/<int:pk>', views.category_handler),
    path('categories/<int:pk>/products', views.category_products_handler),
    path('products', views.products_handler),
    path('products/<int:pk>', views.product_handler)
]
