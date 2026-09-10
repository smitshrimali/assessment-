from rest_framework import viewsets
from rest_framework.filters import OrderingFilter
from django.db import transaction

from .models import Doctor
from .serializers import DoctorSerializer


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


    filter_backends = [OrderingFilter]


    ordering_fields = ['name','specialization','city' ]


    def perform_create(self, serializer):

        with transaction.atomic():

            serializer.save()



