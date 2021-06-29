# Introduction to python list

myList = ['apple', 'banana', 'mango']
n = [12, 43, 2]
# print(myList[0:2]) # ['apple', 'banana']
myList[0] = 'Tomato' # replace item
myList.insert(2,'peach') # insert
myList.append('watermelon') # append to the end of the list

# extend the list
myList.extend(n)

myList.remove('mango') # remove element from list
del myList[0] # del function
# myList.clear()  # clear list
print(myList)
    

number = [3,5,6,8,9]
print(number[3])
# get length of list
print(len(number))

# combine two list
print(myList + number) # ['apple', 'banana', 'mango', 3, 5, 6, 8, 9]




