import requests
import json

url = 'http://localhost:5000/api/save_data'

# данные пользователя в формате JSON
user_data = {
    "first_name": "Иван",
    "last_name": "Иванов",
    "patronymic": "Иванович",
    "birthdate": "01-01-2000",
    "gender": "male",
    "address": "ул. Пушкина, д. 1, кв. 10",
    "passport_series": "1234",
    "passport_number": "567890",
    "passport_issue_date": "01-01-2015",
    "place_of_birth": "г. Москва",
    "snils": "123-456-789 01"
}

# ID пользователя
user_id = 123

# отправляем POST-запрос на API
response = requests.post(url, json={'user_id': user_id, 'user_data': user_data})

# выводим ответ
if response.status_code == 200:
    response_json = json.loads(response.content)
    if response_json['success']:
        print('Данные успешно сохранены')
    else:
        invalid_fields = response_json['invalid_fields']
        print('Не удалось сохранить данные. Некорректные поля:', invalid_fields)
else:
    print('Не удалось сохранить данные. Код ответа:', response.status_code)
