# Methods

spam = ['hello', 'hi', 'howdy', 'heyas']
spam.index('hello') # returns 0
spam.index('heyas') # returns 3
spam.index('fdkafdkafdf') # raises an exception.
spam = ['Zophie', 'Pooka', 'Fat-tail', 'Pooka']
spam.index('Pooka') # returns 1

spam = ['cat', 'dog', 'bat']
spam.append('moose')

spam = ['cat', 'dog', 'bat']
spam.insert(1, 'chicken')

spam = ['cat', 'bat', 'rat', 'elephant']
spam.remove('bat') # removes bat
spam.remove('bat') # gives error

spam = [2, 5, 3.14, 1, -7]
spam.sort()
spam = ['ants', 'cats', 'dogs', 'badgers', 'elephants']
spam.sort()
spam.sort(reverse=True)
spam.sort(key=str.lower)