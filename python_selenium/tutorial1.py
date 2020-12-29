# Selenium Tutorial #1
# https://sites.google.com/a/chromium.org/chromedriver/downloads
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from selenium.webdriver.common.action_chains import ActionChains

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)
driver.get("https://orteil.dashnet.org/cookieclicker/")

driver.implicitly_wait(5)

cookie = driver.find_element_by_id("bigCookie")
cookie_count = driver.find_element_by_id("cookies")
items = [driver.find_element_by_id("productPrice" + str(i)) for i in range(1, -1, -1)]

actions = ActionChains(driver)
actions.click(cookie)

for i in range(5000):
  actions.perform()
  count = int(cookie_count.text.split(" ")[0])
  for item in items:
    value = int(item.text)
    if value <= count:
      upgrade_actions = ActionChains(driver)
      upgrade_actions.move_to_element(item)
      upgrade_actions.click()
      upgrade_actions.perform()





# driver.get("https://techwithtim.net")
# link = driver.find_element_by_link_text("Python Programming")
# link.click()

# try:
#   element = WebDriverWait(driver, 10).until(
#     EC.presence_of_element_located((By.LINK_TEXT, "Beginner Python Tutorials"))
#   )
#   # element.clear()
#   element.click()

#   element = WebDriverWait(driver, 10).until(
#     EC.presence_of_element_located((By.ID, "sow-button-19310003"))
#   )
#   element.click()

#   driver.back()
#   driver.back()
#   driver.back()
#   driver.forward()
#   driver.forward()

# except:
#   driver.quit()






# print(driver.title)

# search = driver.find_element_by_name("s")
# search.send_keys("test")
# search.send_keys(Keys.RETURN)

# # print(driver.page_source)

# try:
#   main = WebDriverWait(driver, 10).until(
#     EC.presence_of_element_located((By.ID, "main"))
#   )
#   # print(main.text)

#   articles = main.find_elements_by_tag_name("article")
#   for article in articles:
#     header = article.find_element_by_class_name("entry-summary")
#     print(header.text)
# finally:
#   time.sleep(5)

#   driver.quit()

