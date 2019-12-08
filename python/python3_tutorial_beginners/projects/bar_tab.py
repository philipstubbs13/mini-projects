class Tab:

  menu = {
    "wine": 5,
    "beer": 3,
    'soft_drink': 2,
    'chicken': 10,
    'beef': 15,
    'veggie': 12,
    'dessert': 6
  }

  def __init__(self):
    self.total = 0
    self.items = []

  def add(self, item):
    self.items.append(item)
    self.total += self.menu[item]

  def print_bill(self, tax, service):
    tax = (tax/100) * self.total
    service = (service/100 * self.total)
    total = self.total + tax + service

    for item in self.items:
      print(f"{item:20} ${self.menu[item]}")

    print(f"{'Total':20} ${total:2f}")


# >>> from bar_tab import Tab
# >>> table1 = Tab()
# >>> table1
# <bar_tab.Tab object at 0x000001A7E1D8A358>
# >>> table1.add('soft_drink')
# >>> table1.add('chicken')
# >>> table1.add('dessert')
# >>> table1.print_bill(10, 10)
# soft_drink $2
# chicken $10
# dessert $6
# Total $21.600000

# >>> from bar_tab import Tab
# >>> table2 = Tab
# >>> table2 = Tab()
# >>> table2
# <bar_tab.Tab object at 0x000002655EF829B0>
# >>> table2.add('wine')
# >>> table2.add('beef')
# >>> table2.print_bill(10, 10)
# wine                 $5
# beef                 $15
# Total                $24.000000