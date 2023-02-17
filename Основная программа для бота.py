TOKEN='5722443254:AAF9R0lEMNQt3n5PJ53Vthy-nKqcVVs79pI'

import telebot
import json
import os

bot = telebot.TeleBot(TOKEN)


# Папка, в которой хранятся файлы json
json_folder = "logic"

# Функция для чтения json-файлов
def load_json(file_name):
    file_path = os.path.join(json_folder, file_name + ".json")
    with open(file_path, encoding="utf-8") as json_file:
        print('Читаем файл '+str(file_path))
        data = json.load(json_file)
    return data

# Функция для создания inline-кнопок
def create_buttons(buttons_list):
    markup = telebot.types.InlineKeyboardMarkup()
    for button_row in buttons_list:
        button_row_markup = []
        for button_data in button_row:
            button_text = button_data["text"]
            button_callback = button_data["callback_data"]
            button = telebot.types.InlineKeyboardButton(text=button_text, callback_data=button_callback)
            button_row_markup.append(button)
        markup.row(*button_row_markup)
    return markup

# Обработчик команды /start
@bot.message_handler(commands=["start"])
def start(message):
    # Читаем данные из файла start.json
    data = load_json("start")
    text = data["text"]
    buttons = data["buttons"]
    parse_mode = "HTML" if data.get("html", False) else None

    # Создаем inline-кнопки
    markup = create_buttons(buttons)

    # Отправляем сообщение
    bot.send_message(message.chat.id, text, reply_markup=markup, parse_mode=parse_mode)



# Обработчик нажатий на inline-кнопки
@bot.callback_query_handler(func=lambda call: True)
def callback_handler(call):
    # Получаем название файла, соответствующего нажатой кнопке
    file_name = call.data

    print(call.from_user.username, call.data)

    # Читаем данные из соответствующего файла
    try:
        data = load_json(file_name)
    except: #если файла нет, сообщаем об этом
        #bot.answer_callback_query(callback_query_id=call.id, text="У этой кнопки пока нет функционала", show_alert=False)
        bot.answer_callback_query(callback_query_id=call.id, text="У этой кнопки пока нет функционала", show_alert=True)      
        return(False)
    text = data["text"]
    buttons = data["buttons"]
    parse_mode = "HTML" if data.get("html", False) else None

    # Создаем inline-кнопки
    markup = create_buttons(buttons)

    # Редактируем отправленное ранее сообщение
    bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id, text=text, reply_markup=markup, parse_mode=parse_mode)



    #помечаем запрос выполненым
    bot.answer_callback_query(call.id)

@bot.message_handler(func=lambda message: True)
def handle_message(message):
    show_alert(message)
    try:
        with open('logic/{}.json'.format(message.text), 'r', encoding='utf-8') as file:
            data = json.load(file)
            text = data['text']
            buttons = data['buttons']
            html = data.get('html', False)
            reply_markup = create_buttons(buttons)
            if html:
                bot.send_message(message.chat.id, text, parse_mode='HTML', reply_markup=reply_markup)
            else:
                bot.send_message(message.chat.id, text, reply_markup=reply_markup)
    except FileNotFoundError:
        bot.send_message(message.chat.id, 'Неизвестная страница')







bot.polling()














                          
