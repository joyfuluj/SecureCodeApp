from flask import jsonify, Blueprint

#Blueprint
main_bp = Blueprint('main_bp', __name__)

def register_blueprints(app):
    """Register all Blueprints to the Flask app."""
    # Register Parent Blueprints
    app.register_blueprint(main_bp)
    
@main_bp.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Flask backend API is running!"})
