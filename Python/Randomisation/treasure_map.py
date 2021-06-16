first_row  = ["⬜️","⬜️","⬜️"]
second_row = ["⬜️","⬜️","⬜️"]
third_row  = ["⬜️","⬜️","⬜️"]

map = [first_row, second_row,third_row]

position = input("Enter your treasure: ")
y = int(position[0])
x = int(position[1])
map[x - 1][y - 1] = "♔"
print(f"{first_row}\n{second_row}\n{third_row}")