
# Write a program that calculates the Body Mass Index (BMI) from a user's weight and height.

# The BMI is a measure of some's weight taking into account their height. e.g. 
# If a tall person and a short person both weigh the same amount, the short person is usually more overweight.
# The BMI is calculated by dividing a person's weight (in kg) by the square of their height (in m):

# Example Input:
# weight = 80
# height = 1.75

# Example Output
# 80 ÷ (1.75 x 1.75) = 26.122448979591837
# 26

height = input("enter your height in m: ")
weight = input("enter your weight in kg: ")

bmi_result = int(weight) / float(height) ** 2
print(int(bmi_result))
