# SecureCodeApp

SecureCodeApp is a secure web-based application designed to help developers write and review secure code snippets. It features real-time code analysis and collaboration tools to promote best practices in secure software development.

## Demo

You can watch it on [YouTube](https://youtu.be/h61BYydZpZM)

[View the Figma design](https://www.figma.com/design/vHjnsTH7CUt6WNomNj9f5N/SecureCodeApp?node-id=0-1&p=f&t=flLIEdiF10xHGpxK-0)


## Features

- **Real-time Secure Code Analysis**  
  Instantly checks your code for vulnerabilities and provides intelligent suggestions to enhance its security posture.

- **Import Feature**  
  Upload source code files directly from your device. The app supports multiple file formats including `.js`, `.py`, `.cpp`, `.java`, `.html`, `.css`, and `.php`.  
  Once a file is selected:
  - It’s automatically **loaded and displayed**
  - **Formatted for readability**
  - Instantly sent for **vulnerability analysis**  

  <img src="https://github.com/user-attachments/assets/e39b99ab-7de9-4ecc-a597-a9bb1cdb031c" width="600" height="350">

  **Usability Win:** No need to paste manually — importing is seamless and intuitive.

- **Highlight Vulnerabilities**  
  Vulnerabilities are **highlighted directly in your code**, helping you quickly pinpoint issues without digging.

  <img src="https://github.com/user-attachments/assets/69c35a7d-e706-49bf-9718-34e50437455d" width="600" height="350">

  **Usability Win:** Clear visual cues save time and reduce cognitive load.

- **Diff View (Before & After)**  
  Displays a **side-by-side comparison** between the original and the fixed version of your code, showing exactly what's changed.

  <img src="https://github.com/user-attachments/assets/548b5c1f-bf6d-43aa-9a58-3674196862f3" width="600" height="350">

  **Usability Win:** Helps you learn and understand the improvements — not just blindly apply them.

- **Export Features**  
  Choose how you want to use or share your cleaned-up code with two convenient options:

  - **“Copy to Clipboard”**: Instantly copy the secure version of your code with one click.
  - **“Download”**: Get the code as a file, automatically matching its original type.  
    For example:
    - Python → `.py`
    - JavaScript → `.js`

  <img src="https://github.com/user-attachments/assets/2e52de90-7e68-4c25-acf4-e97112be6214" width="650" height="350">

  **Usability Win:** Fast, file-type-aware exporting = less hassle and more productivity.

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


## Future Implementation

### Finding Multiple Vulnerabilities
In the future, the system will be enhanced to **find multiple vulnerabilities** in a given block of code. This will allow for more comprehensive analysis and better coverage of potential security issues. The system will be able to detect various types of vulnerabilities, such as:

- SQL Injection
- Cross-Site Scripting (XSS)
- Code Injection (e.g., using `eval()`)
- Command Injection
- and more...

By analyzing the code for multiple vulnerabilities simultaneously, the system will provide users with a detailed report that includes:

- **Type of Vulnerability**
- **Line Number** where the vulnerability occurs
- **Severity Level** (Low, Medium, High)
- **Description** of the vulnerability
- **Recommendation** for fixing the vulnerability

### Implementing Database
The system will also be upgraded to **implement a database** with the following features:

- **User Registration**: Users will be able to create accounts, register, and log in to the application securely. This feature ensures that users' data is stored in the system and provides them with access to personalized features.
  
- **Storing Code Analysis History**: Users will be able to **save the history** of their previously analyzed code. The system will store:
  - The **submitted code** and the **analysis results** (including detected vulnerabilities and recommendations).
  - A **timestamp** of when the analysis was done.
  

These features will be integrated with the backend and database to ensure smooth functionality and user experience.
















