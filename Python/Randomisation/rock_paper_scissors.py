import random

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''
choices = [rock,paper,scissors]
user_input = int(input("Select 0 for rock 1 for paper and 2 for scissor: "))
select = random.randint(0,2)

if (user_input != 1 or user_input != 2 or user_input != 3) and (user_input < 1 or user_input > 3):
    print("Invalid input")
    exit()
elif (user_input == 1 and select == 3) or (user_input == 3 and select == 2) or (user_input == 2 and select == 1):
    print("You won the game")
elif user_input == select:
    print("Tie!")
else:
    print("Try next time")

print(choices[user_input])
print("Computer chose:")
print(choices[select])

