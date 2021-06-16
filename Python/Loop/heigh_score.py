
# find the highest value in the list

input_score = input("Enter all of the score: ").split()
for score in range(0, len(input_score)):
    input_score[score] = int(input_score[score])
print(input_score)


max_value = 0
for s in input_score:
    if s > max_value:
        max_value = s
print(f"The highest value is: {max_value}")