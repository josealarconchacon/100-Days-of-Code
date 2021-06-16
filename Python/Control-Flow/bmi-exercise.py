# Write a program that interprets the Body Mass Index (BMI) based on a user's weight and height.

# It should tell them the interpretation of their BMI based on the BMI value.

# - Under 18.5 they are underweight
# - Over 18.5 but below 25 they have a normal weight
# - Over 25 but below 30 they are slightly overweight
# - Over 30 but below 35 they are obese
# - Above 35 they are clinically obese.

# The BMI is calculated by dividing a person's weight (in kg) by the square of their height (in m):

# # Example Input
# weight = 85
# height = 1.75

# # Example Output
# 85 ÷ (1.75 x 1.75) =  27.755102040816325
# Your BMI is 28, you are slightly overweight.


height = float(input("enter your height in m: "))
weight = float(input("enter your weight in kg: "))

bmi = round(weight / height ** 2)
if bmi < 18.5:
    print(f"You are underweight with an bmi of {bmi} 🤔. ")
elif bmi < 25:
    print(f"You have a normal weight with an bmi of {bmi} 😄. ")
elif bmi < 30:
    print(f"You are slightly overweight with an bmi of {bmi} 🥺. ")
elif bmi < 35:
    print(f"You are obese with an bmi of {bmi} 🙁. ")
else:
    print(f"You are clinically obese with an bmi of {bmi} 💀")
