
# unpaking List
cars = ['Toyota','Honda']
x, y = cars
print(x)
print(y)


# Global Variables
# Variable outside of a function,then use it inside the function
model = 'Tesla'

def myCar():
    print(f'The {model} car is awesome.')

# call function
myCar()



# global Keyword
# Use the global keyword to create a global variable inside of a function

def greet():
    global name
    name = 'Sam Garcia'

greet()
print(f'Hello {name}')