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
# 1. Clone the repository
git clone https://github.com/mohammadfawazgoat/SecureVault
cd SecureVault

# 2. Create a virtual environment
python -m venv venv
source venv/Scripts/activate  # Use 'venv/bin/activate' on Unix-based systems (Linux/Mac)

# 3. Install dependencies
pip install -r requirements.txt

# 4. Generate encryption key
python -c "from cryptography.fernet import Fernet; key = Fernet.generate_key(); with open('secret.key', 'wb') as f: f.write(key)"

# 5. Create a database file named password.db
sqlite3 password.db <<EOF
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE website_password (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    password TEXT NOT NULL,
    website TEXT NOT NULL,
    username TEXT NOT NULL,
    user_id INTEGER
);
EOF

# 6. Run the app
set FLASK_APP=app.py  # For Windows
# Or, for Unix-based systems (Linux/Mac):
# export FLASK_APP=app.py
flask run
