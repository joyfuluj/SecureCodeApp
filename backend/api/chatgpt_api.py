from flask import Blueprint, jsonify
from openai import OpenAI


# Blueprint for chatGPT AI
chatgpt_bp = Blueprint('chatgpt_bp', __name__)

@chatgpt_bp.route('/analyze', methods=['GET'])
def analyze():
    # Use the OpenAI API
    client = OpenAI()
    try:
        response = client.responses.create(
            model="gpt-4o",
            instructions="Talk like a kid.",
            input=[
                {"role": "user", "content": "Who is Shizo Abe?"}
            ]
        )
        if response.status == 'completed':
            # returned message
            message = response.output[0].content[0].text
            return jsonify({'Response': message})
        else:
            return jsonify({'Error': {response.status}}), 500
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    