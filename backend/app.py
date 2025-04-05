from flask import Flask
from backend.routes import register_blueprints

def create_app():

    app = Flask(__name__)  
   
    with app.app_context():
        register_blueprints(app)
        
    return app
