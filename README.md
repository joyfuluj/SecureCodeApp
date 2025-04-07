# SecureCodeApp

SecureCodeApp is a secure web-based application designed to help developers write and review secure code snippets. It features real-time code analysis and collaboration tools to promote best practices in secure software development.

## Features

- **Real-time secure code analysis**  
  Instantly checks code for vulnerabilities and provides smart suggestions to improve security.
  
- **Highlight Vulnerabilities**  
  Highlights the parts of the code that have potential vulnerabilities, making it easy for developers to identify security risks at a glance.
  
  <img src="https://github.com/user-attachments/assets/69c35a7d-e706-49bf-9718-34e50437455d" width="600" height="350">
  
- **Diff View**  
  A side-by-side comparison of the original code and the modified version, clearly showing what has changed to fix vulnerabilities.
  
  <img src="https://github.com/user-attachments/assets/548b5c1f-bf6d-43aa-9a58-3674196862f3" width="600" height="350">
  
- **Export Features**  
  Allows users to export the secure code in various formats to share or save for future use.
  
  <img src="https://github.com/user-attachments/assets/2e52de90-7e68-4c25-acf4-e97112be6214" width="600" height="350">
  
  - **“Copy to Clipboard”**: Copy the cleaned, secure code directly to your clipboard for easy reuse.
  - **“Download”**: Download the modified code as a file based on the type of code entered. For example:
    - If Python code is entered, the download will be a `.py` file.
**This allows developers to download the secured code in the format that suits their project.**

## Tech Stack

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Python (Flask), OpenAI API
- **Database**: No database is used in this project as of now. Data is processed in memory without persistent storage.  
  *(Future plans: Integrate a database for persistent storage)*
- **Security**:
  - Input validation and sanitization using regular expressions
  - Protection against code injection
  - Content size limits
  - HTTPS (recommended for deployment)
- **Tools & Libraries**:
  - React Router (`react-router-dom`) for navigation
  - OpenAI SDK for AI integration
  - Flask Blueprints for modular routing
  - Regex (`re` in Python) for input cleaning

## Installation Guide

### Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/yourusername/SecureCodeApp.git
cd SecureCodeApp
```

2. **Backend Setup (Flask)**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt
flask run
```

4. **Frontend Setup (React)**
```bash
cd frontend
npm install
npm start
```
Your React app should now be running on http://localhost:3000.

## Usage
1. **Paste code snippet in the editor:**  
   Enter your code in the provided editor area.

2. **Click “Analyze”:**  
   The app will analyze your code for vulnerabilities and provide security suggestions.

3. **Highlight Vulnerabilities:**  
   The app will automatically highlight the portions of the code that contain potential security vulnerabilities, making it easy to identify and fix them.

4. **Diff View:**  
   After the vulnerabilities are fixed, you can toggle between the original and modified code using the Diff View. This side-by-side comparison will clearly show what changes were made to improve the security of your code.

5. **Export Options:**
   - **Copy to Clipboard:** Copy the secure version of the code to your clipboard for easy pasting into your project.
   - **Download:** Download the modified code as a file, based on the code's input type.
     
## API Documentation
### POST /api/analyze

**Description:**  
Analyze a code snippet for potential security vulnerabilities.

**Request Body:**  
Code snippet in plain text (string format).

**Response:**  
Security analysis report (JSON format).

## Security Features
### Input Sanitization  
The app performs input sanitization to protect against:
- Bad or unexpected input (e.g. `None`, empty string, or non-string types)
- Code injection attempts using control characters
- Resource abuse from very large payloads
- Unprintable characters that could break display or parsing














