import sys
import hashlib

class Blockchain:
    def __init__(self,timestamp):
        self.chain = []
        self.height = 0
        self.size = sys.getsizeof(timestamp+str(self.height))
        hashString = str(timestamp)+str(self.height)+str(self.size)
        self.currentHash = hashlib.sha256(hashString.encode()).hexdigest()

        self.genesisBlock = {"TimeStamp":timestamp,"Hash":self.currentHash,"PrevHash":"0000000000000000000000000000000000000000000000000000000000000000","Height":self.height,"Size":self.size}

        self.chain.append(self.genesisBlock)
        
    def addBlock(self,data,timestamp):
        self.prevHash = self.chain[-1]["Hash"]
        if(self.validBlock(self.prevHash)):
            
            self.height+=1
            self.size = sys.getsizeof(str(timestamp)+str(self.height)+str(data)+str(self.prevHash))
            hashString = str(timestamp)+str(self.size)+str(data)+str(self.height)+str(self.prevHash)
            self.currentHash  = hashlib.sha256(hashString.encode()).hexdigest()
            self.block={"TimeStamp":timestamp,"Hash":self.currentHash,"PrevHash":self.prevHash,"Height":self.height,"Size":self.size,"Data":data}
            self.chain.append(self.block)
        else:
            print("Previous hash not matched. Unable to add further blocks !!!")
    

   