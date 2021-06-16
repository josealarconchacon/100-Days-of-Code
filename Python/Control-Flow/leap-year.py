# Write a program that works out whether if a given year is a leap year. 
# A normal year has 365 days, leap years have 366, with an extra day in February. 
# The reason why we have leap years is really fascinating, this video does it more justice:


year_input = int(input("Which year do you want to check? "))

if year_input % 4 == 0:
    if year_input % 100 == 0:
        if year_input % 400 == 0:
            print("Leap Year. ")
        else:
            print("Not a Leap Year. ")
    else:
        print("Leap Year. ")
else:
    print("Not a Leap Year. ")
