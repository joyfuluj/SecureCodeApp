from flask import Flask, jsonify
from backend.routes import register_blueprints
from flask_cors import CORS

def create_app():

    app = Flask(__name__)
   
    with app.app_context():
        register_blueprints(app)
        
    return app
