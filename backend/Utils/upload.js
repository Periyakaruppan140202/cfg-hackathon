const XLSX = require("xlsx");
const fs = require("fs");

class FileUtils {
  constructor(file, type) {
    this.file = file;
    this.type = type;
  }
  readExcel() {
    let workbook = XLSX.readFile(this.file);
    let sheet_name_list = workbook.SheetNames;
    let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    return xlData;
  }
}

module.exports = FileUtils;
