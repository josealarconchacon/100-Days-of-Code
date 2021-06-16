print("Welcome to the rollercoaster!")
height = int(input("What is you height in cm? "))
bill = 0

if height >= 120:
    print("You can ride the rollercoaster")
    age = int(input("What is your age? "))
    if age < 12:
        bill = 5
        print("The ticket for a child is $5")
    elif age <= 18:
        bill = 7
        print("The ticket for a youth is $7")
    else:
        bill = 12
        print("The ticket for an adult is $12")
photo = input("Do you want a photo? ")
if photo == "Y":
    bill += 3
    print("Your bill is ${bill}")
else:
    print("Sorry, you have to grow taller before you can ride.")


