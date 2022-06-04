import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

dataset = pd.read_csv("./Excel_Processor/test_error.csv")
res = {}

def NaN_Checker(dataset):
  nan_error = []
  try:
    for i in range(len(dataset)):
        for j in range(23):
            if(str(dataset.iloc[i,j])=="nan"):
                nan_error.append(f'The row is {i+1} and col is {j+1} \n')
   
    res["NaN_Errors"] = nan_error

  except Exception as e:
    res["NaN_Errors"] = nan_error
    return -1,str(e) + '[Error During NaN Checker]'
      
def Month_Checker(dataset):
    month_error = []
    months = ["january","february","march","april","may","june","july","august","september","october","november","december"]
    try:        
        for i in range(len(dataset)):
            if(str(dataset.iloc[i,0]).lower() not in months):
                month_error.append(f"The row is {i+1} and col is 1 \n")
        
        res['Month_Errors'] = month_error
    
    except Exception as e:
        res['Month_Errors'] = month_error
        return -1,str(e) + '[Error During Month Checker]'

def Name_Checker(dataset):
    name_error = []
    columns = [1,2,22]
    try:
        for i in range(len(dataset)):
            for j in columns:
                if(type(dataset.iloc[i,j])!=str):
                    name_error.append(f"The row is {i+1} and col is {j+1} \n")
        
        res["Name_Errors"]=name_error

    except Exception as e:
        res["Name_Errors"]=name_error
        return -1,str(e) + '[Error During Name Checker]'

def Negative_Checker(dataset):
    negative_errors = []
    try:
        for i in range(len(dataset)):
            for j in range(3,22):
                if(type(dataset.iloc[i,j])!=str and dataset.iloc[i,j]<0):
                    negative_errors.append(f"The row is {i+1} and col is {j+1} \n")
        
        res["Negative_Errors"]=negative_errors

    except Exception as e:
        res["Negative_Errors"]=negative_errors
        return -1,str(e) + '[Error During Negative Checker]',dataset

def Excel_Processor(dataset):

    NaN_Checker(dataset)
    Month_Checker(dataset)
    Name_Checker(dataset)
    Negative_Checker(dataset)

    return res




