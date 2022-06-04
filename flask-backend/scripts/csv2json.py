import csv
import json
 
 
# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):

    # create a dictionary
    data = {}

    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)

        # Convert each row into a dictionary
        # and add it to data
        cnt = 1
        for rows in csvReader:

            data[cnt] = rows
            cnt = cnt + 1
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))

 
# Call the make_json function
if __name__ == "__main__":
    # print(predict(sys.argv[1])
    make_json('./Excel_Processor/test_error.csv', './Excel_Processor/test_error.json')
