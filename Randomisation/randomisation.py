import random

random_num = random.randint(0,20)
if random_num == 1:
    print("Head")
else:
    print("Tail")

    # --------------------------------------

names_string = input("write the desired names separated by comma: ")
names = names_string.split(", ")
# get the total number of item in the list
num_item = len(names)

pick_name = random.randint(0, num_item - 1)
name_of_person = names[pick_name]
print(name_of_person + " was selected")


