my_set = {"apple", "banana", "cherry"}
# check how many items a set has
print(len(my_set))

# Add an item to a set
my_set.add("mango")
print(my_set)

# update
my_set.update(["kiwi", "orange"])
print(my_set)

# Remove Item from set
my_set.remove("kiwi")
print(my_set)

# Loop set
for item in my_set:
    print(item)
