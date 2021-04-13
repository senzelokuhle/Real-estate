from django.urls import path
from .views import SmartListView,SmartView,TopSellerView

urlpatterns = [
    path('',SmartListView.as_view()),
    path('top_seller',TopSellerView.as_view()),
    path('<pk>',SmartView.as_view),


]
