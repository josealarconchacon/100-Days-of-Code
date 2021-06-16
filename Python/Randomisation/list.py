states = ["New York", "California", "Delaware", "Pennsylvania", "Alabama", "Iowa", "Oregon", "New Jersey", "Vermont", "Louisiana"]

print(states[4])

states[0] = "NY"
print(states[0])

# add item to list
states.append("Florida")
print(states)

states.extend(["New Hampshire","South Carolina"])
print(states)