import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder

dataset = pd.read_csv("./Excel_Processor/test_error.csv")
def NaN_Checker(dataset):
  row = 0
  col = 0
  nan_error = []
  for i in range(len(dataset)):
    for j in range(23):
      if(str(dataset.iloc[i,j])=="nan"):
        row = i
        col = j
        nan_error.append(f'The row is {row+1} and col is {col+1} \n')
  print(nan_error)


NaN_Checker(dataset)

def Month_Checker(dataset):
  months = ["january","february","march","april","may","june","july","august","september","october","november","december"]
  month_error = []
  for i in range(len(dataset)):
    if(str(dataset.iloc[i,0]).lower() not in months):
      month_error.append(f"The row is {i+1} and col is 1 \n")
  print(month_error)

Month_Checker(dataset)