cities = ['LA', 'NY', 'OK','SF']
for index, value in enumerate(cities, start=1):
    print(index,value)


# join function
join_cities = ' - '.join(cities)
print(join_cities)
