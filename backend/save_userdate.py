

import json
import sqlite3

DB_NAME = 'my_db.sqlite'
USERS_TABLE_NAME = 'users'
class FormData:

    def __init__(self):
        #self.data_path = "data/"
        self.create_tables()

    
    def create_tables(self):
        with sqlite3.connect(DB_NAME) as conn:
            c = conn.cursor()
            c.execute(f'CREATE TABLE IF NOT EXISTS {USERS_TABLE_NAME} (id INTEGER PRIMARY KEY, data TEXT)')

    def save_data(self,user_id, data):
        json_str = json.dumps(data)
        with sqlite3.connect(DB_NAME) as conn:
            c = conn.cursor()
            c.execute(f"SELECT id FROM {USERS_TABLE_NAME} WHERE id=?", (user_id,))
            res = c.fetchone()
            if res is not None:
                # user already exists, update data
                c.execute(f"UPDATE {USERS_TABLE_NAME} SET data=? WHERE id=?", (json_str, user_id))
            else:
                # user doesn't exist, insert new row
                c.execute(f"INSERT INTO {USERS_TABLE_NAME} (id, data) VALUES (?, ?)", (user_id, json_str))
            conn.commit()

    def get_data(self,user_id, filed):
        with sqlite3.connect(DB_NAME) as conn:
            c = conn.cursor()
            c.execute(f"SELECT data FROM {USERS_TABLE_NAME} WHERE id=?", (user_id,))
            res = c.fetchone()
            if res is not None:
                return json.loads(res[0])
            else:
                return None

#form_data = FormData()
#create_tables()

'''

form_data.save_data(1, {"name": "Alice", "age": 25})
form_data.save_data(2, {"name": "Bob", "age": 30, "hobbies": ["reading", "painting"]})
print(form_data.get_data(1))  # {'name': 'Alice', 'age': 25}
print(form_data.get_data(2))  # {'name': 'Bob', 'age': 30, 'hobbies': ['reading', 'painting']}
print(form_data.get_data(3))  # None

#save_data(5,'{"Максим":"11"}')
#save_data(5,{"фио":"макс"})

print(form_data.get_data(1))

'''













