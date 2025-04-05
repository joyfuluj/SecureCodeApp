from flask import Flask
from backend.routes import register_blueprints
from flask_cors import CORS # enable cross-origin resource sharing

def create_app():

    app = Flask(__name__)  
    CORS(app)
    # CORS(app, resources={
    #     r"/api/*": {
    #         "origins": ["http://localhost:3000", "http://127.0.0.1:3000"],
    #         "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    #         "allow_headers": ["Content-Type"]
    #     }
    # })
   
    with app.app_context():
        register_blueprints(app)
        
    return app
