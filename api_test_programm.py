import requests
import json

#url = 'http://localhost:5000/api/save_data'





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

#url = 'http://localhost:5000/api/save_data'
url = 'http://localhost:5000/api/get_data?123'


#response = requests.post(url, json={'user_id': user_id, 'user_data': user_data})

response = requests.get(url, json={})
#print(response)


# выводим ответ
if response.status_code == 200:
    response_json = json.loads(response.content)
    print(response_json)







