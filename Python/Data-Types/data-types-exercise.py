# Write a program that adds the digits in a 2 digit number. e.g. if the input was 35, then the output should be 3 + 5 = 8
#Example: 39 --> 3 + 9 = 12  --> 12

two_digit_number = input("Type a two digit number: ")

first = two_digit_number[0]
second = two_digit_number[1]
final_result = int(first) + int(second)

print(final_result)



