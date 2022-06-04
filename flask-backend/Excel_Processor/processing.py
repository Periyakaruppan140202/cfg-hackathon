import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder

dataset = pd.read_csv("./Excel_Processor/test_error.csv")
def NaN_Finder(dataset):
  row = 0
  col = 0
  L = []
  for i in range(len(dataset)):
    for j in range(23):
      if(str(dataset.iloc[i,j])=="nan"):
        row = i
        col = j
        L.append(f'The row is {row+1} and col is {col+1} \n')
  print(L)


NaN_Finder(dataset)
