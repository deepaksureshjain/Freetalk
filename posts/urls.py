from django.urls import path
from .views import PostArticle,HomePage,ViewProfile

urlpatterns = [
    path('articles/', PostArticle.as_view(), name="article"),
    path('articles/update/<str:pk>/', PostArticle.as_view(), name="update"),
    path('articles/delete/<str:pk>/',PostArticle.as_view(), name="delete"),
    path('home/', HomePage.as_view(), name="home"),
    path('profile/<str:username>/', ViewProfile.as_view(), name="viewprofile")
]
