import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scripts.json2csv import json2csv

def NaN_Checker(dataset):
  nan_error = []
  try:
    for i in range(len(dataset)):
        for j in range(23):
            if(str(dataset.iloc[i,j])=="nan"):
                nan_error.append(f'The row is {i+1} and col is {j+1} \n')
   
    return nan_error

  except Exception as e:
    return -1,str(e) + '[Error During NaN Checker]',nan_error
      
def Month_Checker(dataset):
    
    month_error = []
    months = ["january","february","march","april","may","june","july","august","september","october","november","december"]
    try:        
        for i in range(len(dataset)):
            if(str(dataset.iloc[i,0]).lower() not in months):
                month_error.append(f"The row is {i+1} and col is 1 \n")
        
        return month_error
    
    except Exception as e:
        return -1,str(e) + '[Error During Month Checker]',month_error

def Name_Checker(dataset):
    name_error = []
    columns = [1,2,22]
    try:
        for i in range(len(dataset)):
            for j in columns:
                if(type(dataset.iloc[i,j])!=str):
                    name_error.append(f"The row is {i+1} and col is {j+1} \n")
        
        return name_error

    except Exception as e:
        
        return -1,str(e) + '[Error During Name Checker]',name_error

def Negative_Checker(dataset):
    negative_errors = []
    try:
        for i in range(len(dataset)):
            for j in range(3,22):
                if(type(dataset.iloc[i,j])!=str and dataset.iloc[i,j]<0):
                    negative_errors.append(f"The row is {i+1} and col is {j+1} \n")
        
        return negative_errors

    except Exception as e:
        
        return -1,str(e) + '[Error During Negative Checker]',dataset,negative_errors

def Excel_Processor(jsondata):
    json2csv(jsondata)
    dataset = pd.read_csv('./Excel_Processor/test_fine.csv')
    res = {}
    res['NaN_Errors'] = NaN_Checker(dataset)
    res['Month_Errors'] = Month_Checker(dataset)
    res['Name_Errors'] = Name_Checker(dataset)
    res['Negative_Errors'] = Negative_Checker(dataset)

    return res



# dataset = pd.read_csv("test_error.csv")
# print(dataset)
