import pickle
import numpy as np
import sklearn.cluster
def predict(X):
    X = np.array(X) # X is 2D array
    kmeans_model = pickle.load(open("model.pkl", "rb"))
    y_kmeans = kmeans_model.predict(X)
    c1 = [X[y_kmeans == 0, 0],X[y_kmeans == 0, 1]] # cluster 1 co-ordinates
    c2 = [X[y_kmeans == 1, 0],X[y_kmeans == 1, 1]] # cluster 2 co-ordinates
    return c1,c2

if __name__ == "__main__":
    # print(predict(sys.argv[1])
    c1,c2 = predict([[23,2],[22,4],[26,0],[20,8],[88,4],[18,8],[14,0],[88,4],[22,0],[80,2]])
    print(c1)
    print(c2)
    
