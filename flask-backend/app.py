from flask import Flask,request,jsonify
from flask_cors import CORS
import hashlib
from ML.model import predict

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    print("Server is up and running")
    return jsonify({ "msg" : "Hello Flask Server"}),200


@app.route('/cluster', methods=['POST'])
def cluster():
    data = request.get_json(force=True)
    X = data['array'] #[[1,2],[3,4],...]
    c1,c2 = predict(X)
    out = {'cluster1': c1,'cluster2': c2}
    return jsonify(out),200

@app.route('/uidgenerate', methods=['POST'])
def uidGenerate():
    data = request.get_json(force=True)
    aadhar = data['aadhar']
    name = data['name']
    hashString = aadhar + name
    UID = {"UID":hashlib.sha256(hashString.encode()).hexdigest()}
    return jsonify(UID),200
    


if(__name__) == "__main__":
    app.run(debug=True)

