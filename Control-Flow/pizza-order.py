print("Pizza Delivery")
size = input("Select your size: S, M, L")
pepperoni = input("Do you want pepperoni: Y, N")
cheese = input("Do you want cheese: Y, N")
bill = 0
if size == "S":
    bill += 15
elif size == "M":
    bill += 20
else:
    bill += 25

if pepperoni == "Y":
    if size == "S":
        bill += 2
    else:
        bill += 3

if cheese == "Y":
    bill += 1

print(f"Yor bill is ${bill}")
