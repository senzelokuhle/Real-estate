from django.contrib.auth import get_user_model
User=get_user_model()       #getting user from model class
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework import permissions 

class SignupView(APIView):
    permissions_classes=(permissions.AllowAny,)

    def post(self,request,format=None):
        data=self.request.data      #retrieve form

        name=data['name']
        email=data['email']

        password=data['password']

        password2=data['password2'] 

        if password==password2:

            if User.objects.filter(email=email).exists():       #if email exists in the database
                return Response({'error':'Email already exists'})
            else:
                if len(password) <6:
                    return Response({'error':'Password must have aleast 6 characters'})
                else:
                    user=User.objects.create_user(email=email,password=password,name=name)
                    user.save()
                    return Response({'sucess':'User created successfully'})              
        else:
             return({'error': 'Password do not match'})




        

