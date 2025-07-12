# 🔐 SecureVault

A web-based password manager built with Flask, SQLite, HTML/CSS, and JavaScript.  
Users can securely store, encrypt, and manage their passwords — with full light/dark mode support.

## 🌟 Features
- User registration and login
- End-to-end encryption for stored passwords (using Fernet)
- Add, view, and toggle visibility of saved passwords
- Responsive design with dark/light theme toggle
- Clean UI and modern security practices

## 🛠 Tech Stack
- Python (Flask)
- SQLite
- HTML, CSS, JS (with Bootstrap 4)
- cryptography for encryption
- werkzeug.security for password hashing

## 🚀 How to Run
1. **Clone the repository**
   ```bash
   git clone https://github.com/mohammadfawazgoat/SecureVault
   cd securevault
2. **Create a virtual environment**
    ```bash
    python -m venv venv
    source venv/scripts/activate
3. **Install dependencies**
    ```bash
    pip install -r requirements.txt
4 **Generate encryption Key**
    ```bash
    from cryptography.fernet import Fernet
    key = Fernet.generate_key()
    with open("secret.key","wb") as f:
        f.write(key)
5 **Run the app**
    ```bash
    set FLASK_APP = app.py
    flask run    