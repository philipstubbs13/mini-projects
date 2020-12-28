# Selenium Tutorial #1
# https://sites.google.com/a/chromium.org/chromedriver/downloads
from selenium import webdriver

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("https://techwithtim.net")
print(driver.title)
driver.quit()