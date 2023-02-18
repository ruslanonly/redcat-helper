from flask import Flask, jsonify, request
from save_userdate import FormData

app = Flask(__name__)
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
    user_id = request.args.get('user_id')
    fields = request.args.getlist('fields')
    data = form_data.get_data(user_id, fields)
    if data is None:
        return jsonify({'success': False})
    else:
        return jsonify({'success': True, 'data': data})

if __name__ == '__main__':
    app.run(port=5000)
