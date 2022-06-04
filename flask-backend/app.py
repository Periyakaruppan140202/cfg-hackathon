from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    print("Server is up and running")
    return jsonify({msg : "Hello Flask Server"}),200

if(__name__) == "__main__":
    app.run(debug=True)
    
