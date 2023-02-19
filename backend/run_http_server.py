from flask import Flask, jsonify, request
from save_userdate import FormData
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
form_data = FormData()

@app.route('/api/save_data', methods=['POST'])
@cross_origin()
def save_data():
    user_id = request.json['user_id']
    user_data = request.json['user_data']
    invalid_fields = form_data.save_data(user_id, user_data)
    if invalid_fields:
        return jsonify({'success': False, 'invalid_fields': invalid_fields})
    else:
        return jsonify({'success': True})

@app.route('/api/get_data', methods=['GET'])
@cross_origin()
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
