# Core Functionality 
# Post Creation 
 
# • After login, a user can create a post by providing: 
# o Title 
# o Description 
# o Date (auto-generated or manually entered) 
# • Each post is linked to the user who created it. 
 
# View All Posts 
 
# • Display all posts in a clean format showing: 
# o Author 
# o Title 
# o Date 
# o Description 
 
# Search Posts by Username 
 
# • Let staff search posts created by a specific user. 
 
 
 
# Key Competencies Tested 
# • Functions and modular code design 
# • Lists and dictionaries 
# • Looping (for/while) 
# • Input/output formatting 
# • Basic validation (e.g., login attempts, blank fields) 
# Practical Considerations 
# • Temporary in-memory data (no database) 
# • Clean and organized function-based structure 
# • User-friendly prompts and formatted output 
# • Validate empty input or repeated usernames 


from datetime import datetime

# -------------------------------
# Lists to store users and posts
# -------------------------------
users = []
posts = []

# -------------------------------
# Register Function
# -------------------------------
def register():
    print("\n===== User Registration =====")

    while True:
        username = input("Enter Username: ").strip()

        if username == "":
            print("Username cannot be empty!")
            continue

        # Check duplicate username
        exists = False
        for user in users:
            if user["username"] == username:
                exists = True
                break

        if exists:
            print("Username already exists!")
        else:
            break

    password = input("Enter Password: ").strip()

    users.append({
        "username": username,
        "password": password
    })

    print("Registration Successful!")

# -------------------------------
# Login Function
# -------------------------------
def login():
    print("\n===== Login =====")

    username = input("Username: ").strip()
    password = input("Password: ").strip()

    for user in users:
        if user["username"] == username and user["password"] == password:
            print("Login Successful!")
            return username

    print("Invalid Username or Password.")
    return None

# -------------------------------
# Create Post
# -------------------------------
def create_post(author):
    print("\n===== Create Post =====")

    title = input("Enter Title: ").strip()

    if title == "":
        print("Title cannot be empty.")
        return

    description = input("Enter Description: ").strip()

    if description == "":
        print("Description cannot be empty.")
        return

    date = datetime.now().strftime("%d-%m-%Y")

    posts.append({
        "author": author,
        "title": title,
        "description": description,
        "date": date
    })

    print("Post Created Successfully!")

# -------------------------------
# View All Posts
# -------------------------------
def view_posts():

    if len(posts) == 0:
        print("\nNo Posts Available.")
        return

    print("\n========== ALL POSTS ==========")

    for post in posts:
        print("-----------------------------------")
        print("Author      :", post["author"])
        print("Title       :", post["title"])
        print("Date        :", post["date"])
        print("Description :", post["description"])
        print("-----------------------------------")

# -------------------------------
# Search Posts
# -------------------------------
def search_posts():

    username = input("\nEnter Username: ").strip()

    found = False

    for post in posts:

        if post["author"] == username:
            found = True

            print("-----------------------------------")
            print("Author      :", post["author"])
            print("Title       :", post["title"])
            print("Date        :", post["date"])
            print("Description :", post["description"])
            print("-----------------------------------")

    if not found:
        print("No posts found for this user.")

# -------------------------------
# User Dashboard
# -------------------------------
def dashboard(username):

    while True:

        print("\n====== POST BOARD ======")
        print("1. Create Post")
        print("2. View All Posts")
        print("3. Search Posts by Username")
        print("4. Logout")

        choice = input("Enter Choice: ")

        if choice == "1":
            create_post(username)

        elif choice == "2":
            view_posts()

        elif choice == "3":
            search_posts()

        elif choice == "4":
            print("Logged Out Successfully.")
            break

        else:
            print("Invalid Choice.")

# -------------------------------
# Main Program
# -------------------------------
while True:

    print("\n========== POST BOARD ==========")
    print("1. Register")
    print("2. Login")
    print("3. Exit")

    choice = input("Enter Choice: ")

    if choice == "1":
        register()

    elif choice == "2":
        user = login()

        if user:
            dashboard(user)

    elif choice == "3":
        print("Thank You!")
        break

    else:
        print("Invalid Choice.")


        
 
 