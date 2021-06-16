
print("Welcome to the City")
height = int(input("What is your height in cm ?"))

if height >= 100:
    print("You are allowed to enter the club ")
    age = int(input("What is you r age? "))
    if age < 12:
         print("Please pay $4. ")
    elif age <= 18:
        print("Please pay $7. ")
    else:
        print("Please pay $12. ")
else:
    print("Sorry, you are too short")