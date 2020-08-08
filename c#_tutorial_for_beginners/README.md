# C# Tutorial For Beginners - Learn C# Basics in 1 ----------

* <https://www.youtube.com/watch?v=gfkTfcpWqAY>
* C# is a programming language.
* .NET is a framework for building applications on Windows.
* .NET
  * CLR (Common Language Runtime)
  * Class Library

* Declaring Variables / Constants

```bash
int number;

int Number = 1;

const float Pi = 3.14f;
```

* Identifier
  * Cannot start with a number.
  * Cannot include a whitespace.
  * Cannot be a reserved keyword.
  * Use meaningful names
* Naming Conventions
  * Camel Case
  * Pascal Case
  * Hungarian Notation
  * For local variables: Camel Case
  * For constants: Pascal Case
* non primitive types
  * string
  * array
  * enum
  * class
* Scope
  * where a variable has meaning

```bash
using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            var number = 2;
            var count = 10;
            var totalPrice = 20.95f;
            var character = 'A';
            var firstName = "Mosh";
            var isWorking = false;

            Console.WriteLine(number);
            Console.WriteLine(count);
            Console.WriteLine(totalPrice);
            Console.WriteLine(character);
            Console.WriteLine(firstName);
            Console.WriteLine(isWorking);
        }
    }
}
```

```bash
using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            const float Pi = 3.14f;
            Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);
            Console.WriteLine("{0} {1}", float.MinValue, float.MaxValue);
        }
    }
}
```

* Non compatible types

```bash
string s = "1";

int i = Convert.ToInt32(s);

int j = int.Parse(s)
```

* Convert

```bash
ToByte()

ToInt()

ToInt32()

ToInt64()
```

```bash
using System;

namespace TypeConversion
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var number = "1234";
                byte b = Convert.ToByte(number);
                Console.WriteLine(b);

                string str = "true";
                bool b = Convert.ToBoolean(str);
                Console.WriteLine(b);
            }
            catch (Exception)
            {
                Console.WriteLine("The number could not be converted to a byte.");
            }
        }
    }
}
```
