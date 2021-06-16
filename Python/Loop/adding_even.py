# sum of all the even numbers from 1 to 100
sum_of_even = 0

for numbers in range(1,101):
    if(numbers % 2 == 0):
        sum_of_even += numbers
print(f"Sum of all even numbers is: {sum_of_even}")