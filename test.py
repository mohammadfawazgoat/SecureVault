from cryptography.fernet import Fernet


def main():
    key = load_key()
    token = key.encrypt(b"welcome to geeksforgeeks")
    d = key.decrypt(token)
    print(d)


def load_key():
    k = open("secret.key","rb").read()
    key = Fernet(k)
    return key

if __name__ == '__main__':
    main()