
dict = {
  "brand": "Lucid",
  "model": "Air",
  "year": 2022
}

# Access Dictionary Items
get_year = dict["year"]
get_brand = dict.get("brand")
print(get_year)
print(get_brand)

# Get Keys
get_key = dict.keys()
print(get_key) # ['brand', 'model', 'year']
# Add a new item to the dictionary
dict["color"] = "black"
print(get_key) # ['brand', 'model', 'year', 'color']



# Get Values
get_value = dict.values()
print(get_value) # ['Lucid', 'Air', 2022, 'black']


# Get Items
# items() method will return each item in a dictionary, as tuples in a list
items = dict.items()
print(items) # [('brand', 'Lucid'), ('model', 'Air'), ('year', 2022), ('color', 'black')]


# Check if Key exists in the dictionary
if "color" in dict:
    print("Yes, 'color' is one of the keys in the dictionary") 


# values() method to return values of a dictionary:
for i in dict.values():
    print(i)

# keys() method to return the keys of a dictionary:
for i in dict.keys():
    print(i)


# Copy a Dictionary
myDict = dict.copy()
print(myDict)

