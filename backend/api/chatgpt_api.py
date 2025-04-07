from flask import Blueprint, jsonify, request
from openai import OpenAI
import re


# Blueprint for chatGPT AI
chatgpt_bp = Blueprint('chatgpt_bp', __name__)

@chatgpt_bp.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()  # Parse JSON body
        code_input = data.get('code')  # Extract 'code' field from the JSON data

        code_input = re.sub(r'[^\x09\x0A\x0D\x20-\x7E]', '', code_input)  # Remove non-printable characters
        
    # Use the OpenAI API
        client = OpenAI()

        try:
            response = client.responses.create(
                model="gpt-4o",
                instructions="Detect code vulnerability and Fix it. Please answer with the json format with" \
                                " \"type\" with type of vulnerability in broad, \"explain_o\" with more than 40 words explanation of vulnerability, " \
                                "\"explain_f\ with more than 40 words explanation of fixed code and "\
                                " \"keyword_o\" with part of the code with vulnerability, \"keyword_f\" with part of the code fixed which has been replaced and \"fixed\" with fixed code," \
                                " \"extension\" with the extension of the file based on the input code.",
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
    