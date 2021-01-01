
# Create a program using maths and f-Strings that tells us how many days, weeks, months we have left if we live until 90 years old. 
# It will take your current age as the input and output a message with our time left in this format:

# You have x days, y weeks, and z months left. 
# Where x, y and z are replaced with the actual calculated numbers. 

age = input("What is your current age?")

your_age = int(age)
year_remaining = 90 - your_age
days_remaining = year_remaining * 365
weeks_remaining = year_remaining * 52
months_remaining = year_remaining * 12

result = f"You have {days_remaining} days, {weeks_remaining} weeks, and {months_remaining} months left"
print(result)