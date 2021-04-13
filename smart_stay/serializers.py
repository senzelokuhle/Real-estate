from django.db.models import fields
from rest_framework import serializers
from .models import smart_stays 

class Smart_staySerializer(serializers.ModelSerializer):
    class Meta:
        model=smart_stays
        fields='__all__'

