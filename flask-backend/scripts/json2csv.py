import json
import csv


def json2csv(jsondata):
    # Opening JSON file and loading the data
    # into the variable data
    data = json.load(jsondata)

    # now we will open a file for writing
    data_file = open('./Excel_Processor/test_fine.csv', 'w')

    # create the csv writer object
    csv_writer = csv.writer(data_file)

    cnt = 1
    head_data = data[f'{cnt}']
    csv_writer.writerow(head_data)

    # Counter variable used for writing
    # headers to the CSV file

    for ins in data:
        csv_writer.writerow(data[f'{cnt}'].values())
        cnt = cnt + 1

    data_file.close()

    return data_file


if __name__ == "__main__":
    json2csv()