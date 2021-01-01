
# If the bill was $150.00, split between 5 people, with 12% tip. 
# Each person should pay (150.00 / 5) * 1.12 = 33.6
# Format the result to 2 decimal places = 33.60
# Tip: There are 2 ways to round a number. You might have to do some Googling to solve this.💪
# HINT 2: https://www.kite.com/python/answers/how-to-limit-a-float-to-two-decimal-places-in-python


name = input("Enter your name?")
print(f"{name}, Welcome to the Tip Calculator!")

bill_amount = float(input("What was the total bill amount? $: "))
tip_amount = int(input("How much $ tip would you like to give? 10, 12 or 15 :"))
people = int(input("How many people are going to  to split the bill?: "))

tip_percent = tip_amount / 100
totla_tip_amount = bill_amount * tip_percent
total_bill = bill_amount + totla_tip_amount

each_person = total_bill / people
final_amount = round(each_person, 2)

print(f"Each person will be paying: ${final_amount}")