import os
import json
import re
from datetime import datetime


class FormData:
    def __init__(self):
        self.data_path = "data/"

    def _validate_fio(self, fio):
        if fio==None:
            return(True)
        return all(re.match("^[а-яА-ЯёЁ]+$", name) for name in fio.values())

    def _validate_date(self, date_str):
        if date_str==None:
            return(True)
        try:
            date = datetime.strptime(date_str, "%d-%m-%Y")
            return date < datetime.now()
        except ValueError:
            return False

    def _validate_gender(self, gender):
        return gender in ["male", "female", None]

    def _validate_data(self, data):
        invalid_fields = {}
        if not self._validate_fio(data.get("fio")):
            invalid_fields["fio"] = data.get("fio")
        if not self._validate_date(data.get("birthdate")):
            invalid_fields["birthdate"] = data.get("birthdate")
        if not self._validate_date(data.get("passport_issue_date")):
            invalid_fields["passport_issue_date"] = data.get("passport_issue_date")
        if not self._validate_gender(data.get("gender")):
            invalid_fields["gender"] = data.get("gender")
        return invalid_fields

    def save_data(self, user_id, data):
        invalid_fields = self._validate_data(data)
        if invalid_fields:
            return invalid_fields

        filename = f"{self.data_path}{user_id}.json"
        with open(filename, "w") as f:
            json.dump(data, f)
        return None

    def get_data(self, user_id, fields=None):
        filename = f"{self.data_path}{user_id}.json"
        if not os.path.isfile(filename):
            return None

        with open(filename, "r") as f:
            data = json.load(f)

        if fields is None:
            return data

        return {field: data.get(field) for field in fields}





form_data = FormData()

'''

# Сохраняем данные для пользователя с ID 12345
user_data = {
    "fio": {
        "last_name": "Иванов",
        "first_name": "Иван",
        "patronymic": "Иванович"
    },
    "birthdate": "01-01-1990",
    "gender": "male",
    "address": "г. Москва, ул. Пушкина, д. 10, кв. 5",
    "passport_series": "1234",
    "passport_number": "567890",
    "passport_issue_date": "01-01-2010",
    "place_of_birth": "г. Москва",
    "snils": "123-456-789 01"
}
invalid_fields = form_data.save_data(12345, user_data)
if invalid_fields:
    print(f"Не удалось сохранить данные для пользователя 12345. Некорректные поля: {invalid_fields}")
else:
    print(f"Данные для пользователя 12345 успешно сохранены.")

# Получаем данные для пользователя с ID 12345
data = form_data.get_data(12345)
if data is None:
    print("Данные для пользователя 12345 не найдены.")
else:
    print(f"Данные для пользователя 12345: {data}")

# Получаем только поле "fio" для пользователя с ID 12345
fio_data = form_data.get_data(12345, ["fio"])
if fio_data is None:
    print("Данные для пользователя 12345 не найдены.")
else:
    print(f"Данные для поля 'fio' для пользователя 12345: {fio_data}")

'''


