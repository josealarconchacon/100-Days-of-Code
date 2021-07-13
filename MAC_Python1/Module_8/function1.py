# Passing a List as an Argument
def my_cars(car):
    for i in car:
        print(i)

cars = ['Tesla', 'Lucid', 'Honda', 'Toyota']
my_cars(cars)


# multiplication of two numbers
def my_function(x,y):
    return x * y
print(my_function(5,4))



# Calculate the Area of a Rectangle
def areaOfRect(w, h):
    # calculate the area
    area = w * h
 
    print("\n Area of a Rectangle is: %.2f" %area)
     
width = float(input('Please Enter the Width: '))
height = float(input('Please Enter the Height: '))

areaOfRect(width, height)


# calculate the area of a circle
def area(r, PI = 3.14):
    return PI * r * r
print(area(5));