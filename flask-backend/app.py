from flask import Flask,request,jsonify
from flask_cors import CORS
import hashlib
from ML.model import predict
from Excel_Processor.processing import Excel_Processor
from scripts.json2csv import json2csv
from Blockchain_Model.blockchain import Blockchain
import datetime,time
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
    aadhar = str(data['aadhar'])
    name = data['name']
    hashString = aadhar + name
    UID = {"UID":hashlib.sha256(hashString.encode()).hexdigest()}
    return jsonify(UID),200

@app.route('/excel/process',methods =['POST'])
def Excel_Process():
    data = request.get_json(force=True)
    dataset = data['dataset']
    res = Excel_Processor(dataset)
    return jsonify(res),200


blockchain = Blockchain(str(datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')))

@app.route('/addblock',methods=['POST','GET'])
def addBlock():
    data = request.form.get('data')
    timestamp = str(datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S'))
    blockchain.addBlock(data,timestamp)

    return jsonify(blockchain.getLastBlock()),200

@app.route('/viewchain')
def viewChain():
    return jsonify(blockchain.viewChain()),200

if(__name__) == "__main__":
    app.run(debug=True)

