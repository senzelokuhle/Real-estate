from django.db.models import query
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions 
from .models import smart_stays
from .serializers import Smart_staySerializer

class SmartListView(ListAPIView):
    permisisons_classes=(permissions.AllowAny,)  #Allow any user to view without being authenticated
    queryset=smart_stays.objects.all()
    serializer_class=Smart_staySerializer
    pagination_class=None

class SmartView(RetrieveAPIView):               #real estate view
    queryset=smart_stays.objects.all()
    serializer_class=Smart_staySerializer

class TopSellerView(ListAPIView):               #Top sellter view
    permisisons_classes=(permissions.AllowAny,)  #Allow any user to view without being authenticated
    queryset=smart_stays.objects.filter(top_seller=True)
    serializer_class=Smart_staySerializer
    pagination_class=None


