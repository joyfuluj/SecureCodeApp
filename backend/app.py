from flask import Flask
from backend.routes import register_blueprints
from flask_cors import CORS # enable cross-origin resource sharing

def create_app():

    app = Flask(__name__)  
    CORS(app)  # Enable CORS for all routes
   
    with app.app_context():
        register_blueprints(app)
        
    return app
