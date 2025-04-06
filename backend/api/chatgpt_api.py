from flask import Blueprint, jsonify, request
from openai import OpenAI


# Blueprint for chatGPT AI
chatgpt_bp = Blueprint('chatgpt_bp', __name__)

@chatgpt_bp.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()  # Parse JSON body
        code_input = data.get('code')  # Extract 'code' field from the JSON data
        if not code_input:
            return jsonify({'error': 'No code input provided'}), 400
    # Use the OpenAI API
        client = OpenAI()
        user_input = "import yaml\n\n\ndef yaml_load(filename):\n" \
                    "    '''\n    Use the filename variable to open a file, \n     " \
                    "load its contents into a variable with yaml, and return it.\n    " \
                    "'''\n    with open(filename, 'r') as f:\n        " \
                    "data = yaml.load(f, Loader=yaml.BaseLoader)\n        return data"
        try:
            response = client.responses.create(
                model="gpt-4o",
                instructions="Detect code vulnerability and Fix it. Please answer with the json format with" \
                                " \"type\" with type of vulnerability in broad, \"explain\" with more than 40 words explanation of vulnerability,"
                                " \"original\" for original code and \"fixed\" with fixed code",
                input = code_input,
            )
            if response.status == 'completed':
                # returned message
                message = response.output[0].content[0].text
                return jsonify({'Response': message})
            else:
                return jsonify({'Error': {response.status}}), 500
            
        except Exception as e:
            return jsonify({'error': str(e)}), 500
        
    except Exception as e:
        return jsonify({'error': f'Failed to process code input: {str(e)}'}), 400
    