

#  defining function that will convert the temperature from F to C
def  convert_f_c(fahrenheit):
    celsius = (fahrenheit - 32) * (5/9)
    return celsius
fahrenheit_temp = float(input('Enter temperature in fahrenheit: '))
print(convert_f_c(fahrenheit_temp))
