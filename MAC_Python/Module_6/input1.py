num1 = int(input('Enter any integer: '))
num2 = float(input('Enter a float number: '))
product = num1 * num2
print(f'The multiplication of {num1} * {num2} = {product}')


# getting multiple inputs from the user in one line
name, age, grade = input('Enter name, age and grade, ').split()
print(f'Name: {name}\nAge: {age}\nGrade: {grade}')