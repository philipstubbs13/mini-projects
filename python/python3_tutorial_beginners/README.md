# Python 3 Tutorial for Beginners

* <https://www.youtube.com/watch?v=Ozrduu2W9B8&list=PL4cUxeGkcC9idu6GZ8EU_5B6WpKTdYZbK&index=2&t=0s>

## Numbers

```bash

>>> type(5)
<class 'int'>
>>> type(3.142)
<class 'float'>
>>> 5 + 5
10
>>> 5 - 5
0
>>> 5 * 5
25
>>> 5 / 5
1.0
>>> 5 // 5
1
>>> 5 ** 5
3125
>>> 10 % 3
1
>>> 5 + 5 * 3
20
>>> (5 + 5) *3
30
>>> age = 25
>>> age
25
>>> age + 5
30
>>> age
25
>>> age = age + 5
>>> age
30
>>> age += 5
>>> age
35
>>> age -= 5
>>> age
30
>>> age /= 2
>>> age
15.0
>>> wages = 1000
>>> bills = 200
>>> rent = 500
>>> food = 200
>>> savings = wages - bills - rent - food
>>> savings
100
```

## Strings

```bash
>>> "hello"
'hello'
>>> 'hello'
'hello'
>>> 'he's a mad man'
  File "<stdin>", line 1
    'he's a mad man'
        ^
SyntaxError: invalid syntax
>>> "he
  File "<stdin>", line 1
    "he
      ^
SyntaxError: EOL while scanning string literal
>>> "he's a mad man"
"he's a mad man"
>>> 'he\'s a mad man'
"he's a mad man"
>>> greet = 'hello'
>>> greet
'hello'
>>> greet[0]
'h'
>>> greet[1]
'e'
>>> greet[-1]
'o'
>>> greet[-5]
'h'
>>> greet[0:3]
'hel'
>>> greet[-1:2]
''
>>> greet[2: -1]
'll'
>>> greet
'hello'
>>> greet = greet[0:3]
>>> greet
'hel'
>>> greet = 'hello'
>>> str2 = 'dudes'
>>> greet + str2
'hellodudes'
>>> greet + ' ' + str2
'hello dudes'
>>> greet * 3
'hellohellohello'
>>> greet * 5
'hellohellohellohellohello'
>>> greet.upper()
'HELLO'
>>> greet
'hello'
>>> greet = greet.upper()
>>> greet
'HELLO'
>>> cheeses = "brie, cheddar, stilton"
>>> cheeses.split(',')
['brie', ' cheddar', ' stilton']
>>> greet
'HELLO'
>>> len(greet)
5
```

## Lists

```bash
>>> str = "hello there dudes"
>>> str.split(' ')
['hello', 'there', 'dudes']
>>> fib1 = [1, 1, 2, 3, 5, 8, 13]
>>> fib1
[1, 1, 2, 3, 5, 8, 13]
>>> fib[2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'fib' is not defined
>>> fib1[2]
2
>>> fib1[5]
8
>>> fib1[-1]
13
>>> fib1[-3]
5
>>> fib1[0]
1
>>> fib1[0:4]
[1, 1, 2, 3]
>>> fib2 = [21, 34, 55]
>>> fib1 + fib2
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
>>> fib1
[1, 1, 2, 3, 5, 8, 13]
>>> fib1[0] = 9
>>> fib1
[9, 1, 2, 3, 5, 8, 13]
>>> fib1[0] = 1
>>> fib1
[1, 1, 2, 3, 5, 8, 13]
>>> fib = fib1 + fib2
>>> fib
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
>>> fib.append(89)
>>> fib
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
>>> fib.pop()
89
>>> fib
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
>>> fib.append(89)
>>> fib1
[1, 1, 2, 3, 5, 8, 13]
>>> fib
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
>>> fib.remove(89)
>>> fib
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
>>> fib.append(89)
>>> fib.append(89)
>>> fib
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 89]
>>> fib.remove(89)
>>> fib
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
>>> del(fib[10])
>>> fib
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
>>> del(fib[3])
>>> fib
[1, 1, 2, 5, 8, 13, 21, 34, 55]
>>> chars = ['mario', 'luigi', 'bowser']
>>> chars
['mario', 'luigi', 'bowser']
>>> chars.append(5)
>>> chars
['mario', 'luigi', 'bowser', 5]
>>> nums = []
>>> nums = [chars, fib1, [1, 2, 3, 4]]
>>> nums
[['mario', 'luigi', 'bowser', 5], [1, 1, 2, 3, 5, 8, 13], [1, 2, 3, 4]]
>>> nums[0]
['mario', 'luigi', 'bowser', 5]
>>> nums[1]
[1, 1, 2, 3, 5, 8, 13]
>>> nums[2]
[1, 2, 3, 4]
>>> nums[2][1]
2
>>>    
```