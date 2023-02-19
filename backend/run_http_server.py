from flask import Flask, jsonify, request
from save_userdate import FormData
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # добавляем CORS к приложению
form_data = FormData()

@app.route('/api/save_data', methods=['POST'])
def save_data():
    user_id = request.json['user_id']
    user_data = request.json['user_data']
    invalid_fields = form_data.save_data(user_id, user_data)
    if invalid_fields:
        return jsonify({'success': False, 'invalid_fields': invalid_fields})
    else:
        return jsonify({'success': True})

@app.route('/api/get_data', methods=['GET'])
def get_data():
    url=str(request.url)
    user_id = url[url.rfind('?')+1:]

    
    fields = request.args.getlist('fields')
    try:
        user_id=int(user_id)
    except:
        return jsonify({'success': False})
    
    data = form_data.get_data(user_id, None)
    #print(data)
    if data is None:
        return jsonify({'success': False})
    else:
        return jsonify({'success': True, 'data': data})

app.run(port=5000)
