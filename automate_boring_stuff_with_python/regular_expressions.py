import re

# message = 'Call me 415-555-1011 tomorrow, or at 415-555-9999'

# phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
# mo = phoneNumRegex.findall(message)
# print(mo)

# phoneNumberRegex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
# mo = phoneNumberRegex.search('My number is 415-555-4242')
# print(mo.group())
# print(mo.group(1))
# print(mo.group(2))
# phoneNumberRegex = re.compile(r'\(\d\d\d\) \d\d\d-\d\d\d\d')
# mo = phoneNumberRegex.search('My number is (415)-555-4242')
# print(mo.group())

batRegex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = batRegex.search('Batmobile lost a wheel')
print(mo.group())
print(mo.group(1))

# def isPhoneNumber(text):
#   if len(text) != 12:
#     return False # not phone number-sized
#   for i in range(0,3):
#     if not text[i].isdecimal():
#       return False # no area code
#   if text[3] != '-':
#     return False # mssing dash
#   for i in range(4, 7):
#     if not text[i].isdecimal():
#       return False # no first 3 digits
#   if text[7] != '-':
#     return False # missing second dash
#   for i in range(8, 12):
#     if not text[i].isdecimal():
#       return False # missing last 4 digits
#   return True

# print(isPhoneNumber('hello'))

# message = 'Call me 415-555-1011 tomorrow, or at 415-555-9999'
# foundNumber = False
# for i in range(len(message)):
#   chunk = message[i:i+12]
#   if isPhoneNumber(chunk):
#     print('Phone number found: ' + chunk)
#     foundNumber = True
# if not foundNumber:
#   print('Could not find any phone numbers.')


