import mysql.connector
from database import cursor

DB_NAME = 'acme'

def create_database():
  cursor.execute("CREATE DATABASE IF NOT EXISTS {} DEFAULT CHARACTER SET 'utf8'".format(DB_NAME))
  print("Database {} created!".format(DB_NAME))

create_database()