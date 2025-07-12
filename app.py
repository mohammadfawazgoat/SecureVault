from flask import Flask, render_template,redirect,request,session,g
import sqlite3
from flask_session import Session
from cryptography.fernet import Fernet
from werkzeug.security import check_password_hash,generate_password_hash

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

DATABASE = "password.db"

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(DATABASE)
        g.db.row_factory = sqlite3.Row  # Optional: allows dict-like access
    return g.db

# Close database connection after request
@app.teardown_appcontext
def close_db(exception):
    db = g.pop('db', None)
    if db is not None:
        db.close()   
def load_key():
    k = open("secret.key","rb").read()
    key = Fernet(k)
    return key



@app.route('/')
def index():
    return render_template('homepage.html')    

@app.route('/login', methods =["GET"])
def loginpage():
    return render_template("login.html",user_exist = False,wrong =False)

@app.route("/register", methods = ["GET","POST"])
def register():
    if request.method == "POST":
        db = get_db()
        username = request.form.get("username")
        password = request.form.get("password")
        hash_password = generate_password_hash(password)
        user_exist = db.execute("SELECT username FROM users WHERE username = ?",(username,)).fetchone()
        if user_exist:
            return render_template("login.html",user_exist=True,wrong =False)
        else:    
            db.execute("INSERT INTO users(username,password) VALUES(?,?)",(username,hash_password,))
            user = db.execute("SELECT id FROM users WHERE username = ?",(username,)).fetchone()
            session["user_id"] = user["id"]
        db.commit()
        
    return redirect("/")


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


@app.route("/log",methods = ["GET","POST"])
def login():
    if request.method == "POST":
        db = get_db()
        username = request.form.get("username")
        password = request.form.get("password")
        user = db.execute("SELECT * FROM users WHERE username = ?",(username,)).fetchone()
        if not user or not check_password_hash(user["password"],password):
            return render_template("login.html",wrong = True,user_exist = False)
        else:
            session["user_id"] = user["id"]
            return redirect("/") 
    return redirect("/")


@app.route("/add_password",methods = ["GET","POST"])
def add_password():
    session["user_id"]
    db = get_db()
    if request.method == "GET":
        return render_template("add_password.html")
    website = request.form.get("website")
    username = request.form.get("username")
    password = request.form.get("password").encode()
    user_id = session["user_id"]
    key = load_key()
    encrypted_password = key.encrypt(password)
    db.execute("INSERT INTO website_password (password,website,username,user_id) VALUES(?,?,?,?)",(encrypted_password,website,username,user_id,))
    db.commit()
    return redirect("/")


@app.route("/saved_password", methods = ["GET"])
def saved_passwords():
    session["user_id"]
    db = get_db()
    row = db.execute("SELECT * FROM website_password where user_id = ?",(session["user_id"],)).fetchall()
    key = load_key()
    decrypted = []
    for rows in row:
        decrypted_password = key.decrypt(rows["password"]).decode()
        decrypted.append({
            "website": rows["website"],
            "username": rows["username"],
            "password": decrypted_password
        })
    return render_template("saved_passwords.html",passwords = decrypted) 
    



if __name__ == "__main__":
    app.run(debug=True)

