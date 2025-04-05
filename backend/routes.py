from flask import jsonify, Blueprint
from backend.api.chatgpt_api import chatgpt_bp

#Blueprint
main_bp = Blueprint('main_bp', __name__)
api_bp = Blueprint('api_bp', __name__)

def register_blueprints(app):
    """Register all Blueprints to the Flask app."""

    # Register Child Blueprints
    api_bp.register_blueprint(chatgpt_bp, url_prefix='/chatgpt')
    
    # Register Parent Blueprints
    app.register_blueprint(api_bp, url_prefix='/api')
    app.register_blueprint(main_bp)
    
@main_bp.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Flask backend API is running!"})
