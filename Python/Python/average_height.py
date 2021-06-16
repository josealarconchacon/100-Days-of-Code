
# calculates the average height from a List of heights
heights = [180, 124, 165, 173, 189, 169, 146]

total_height = 0
# loop through the list of heights
for height in heights:
    # summ all heights
    total_height += height
print(total_height) # 1146


number_of_height = 0
# get the length
for i in heights:
    number_of_height += 1
print(number_of_height) # 7

average =  round(total_height / number_of_height)
print(average)

