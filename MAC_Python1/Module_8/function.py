# define a function with one argument
def myFunc(name):
    print(f'My name is {name}')
myFunc('Tom')


# define a function with two argument
def person_name(f_name, l_name):
    print(f'My full name is {f_name} {l_name}')
person_name('Tom', 'De Pino')


# function with default parameter value
def my_country(country = 'USA'):
    print(F'I am from {country}')
my_country('Canada')
my_country('India')
my_country('Sweden')
