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
        

   