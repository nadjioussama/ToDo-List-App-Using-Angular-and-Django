
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from ToDoApp import views, api
from django.urls import path, include, re_path
from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

router = routers.DefaultRouter()
router.register(r'category', api.CategoryViewset)
router.register(r'todo', api.TodoViewset)
router.register(r'users', api.UserViewset)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),

    path('api/todo/', views.CreateTask),
    path('api/category/', views.CreateCategory),
    
    path('api/todo/<int:pk>', views.CRUDTask),
    path('api/category/<int:pk>', views.CRUDCategory),
    
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),

    path('register/', views.RegisterView.as_view(), name='auth_register')
]
