from django.shortcuts import render, redirect
from .forms import UserProfileForm
from .models import UserProfile
import csv
from django.http import HttpResponse

def create_profile(request):

    if request.method == "POST":

        form = UserProfileForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('profile_list')

    else:
        form = UserProfileForm()

    return render(request, 'create.html', {'form': form})


def profile_list(request):

    profiles = UserProfile.objects.all()

    return render(request,
                  'list.html',
                  {'profiles': profiles})




def export_csv(request):

    response = HttpResponse(content_type='text/csv')

    response['Content-Disposition'] = 'attachment; filename=profiles.csv'

    writer = csv.writer(response)

    writer.writerow(['Username', 'Age', 'Public'])

    profiles = UserProfile.objects.all()

    for profile in profiles:

        writer.writerow([
            profile.username,
            profile.age,
            profile.is_public
        ])

    return response
