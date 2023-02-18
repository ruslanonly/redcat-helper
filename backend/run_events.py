import datetime
import json
import requests

# открываем файл с данными событий
with open('events.txt', 'r',encoding='utf-8') as f:
    for line in f:
        # разделяем строки на столбцы
        date, event_name, event_description = line.strip().split('\t')
        # преобразуем строку с датой в объект datetime
        while True:
            event_date = datetime.datetime.strptime(date, '%d.%m.%Y %H:%M:%S')
            # проверяем, наступило ли событие
            if event_date <= datetime.datetime.now():
                # формируем json-переменную
                print('Насупило событие!',event_name,event_description)
                data = {'date': date, 'event_name': event_name, 'event_description': event_description}
                json_data = json.dumps(data)
                # отправляем post-запрос на локальный порт 5000
                url = 'http://localhost:5000/events'
                headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
                response = requests.post(url, data=json_data, headers=headers)




