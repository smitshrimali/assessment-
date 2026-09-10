from django.shortcuts import render, redirect
from .forms import UserProfileForm
from .models import UserProfile

def create_profile(request):

    if request.method == "POST":

        form = UserProfileForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('profile_list')

    else:
        form = UserProfileForm()

    return render(request, 'create.html', {'form': form})


def view_profile(request):

    profiles = UserProfile.objects.all()

    return render(request,'list.html',{'profiles': profiles})
