this_list = ['banana','Orange','Kiwi','cherry']
this_list.sort(key = str.lower)  # sort alphabetically by this first character
# print(this_list)

list = ['banana','Orange','Kiwi','cherry']
list.sort()  # print Uppercase first, then lower case
print(list)

thisList = ['apple','banana','cherry']
myList = thisList.copy() # myList now will contain all elements of thisList
# print(myList)

# Loop Through a List
for i in thisList: 
    print(i)

# Loop Through the Index Numbers
frutis = ['Blueberries','Cherries','Dewberry','Fig','Cantaloupe','Rambutan','Quince','Raspberry']
for item in range(len(frutis)):
    print(frutis[item])

# Using List Comprehension
[print(i) for i in frutis]



