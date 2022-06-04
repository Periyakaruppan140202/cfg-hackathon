var mongoose = require("mongoose");
require("dotenv").config();

function Dbconnect() {
  const DB_URL = process.env.MONGO_URI;

  mongoose.connect(DB_URL, {}, (err) => {
    if (!err) console.log("database started!!");
    else console.log(err);
  });
}

module.exports = Dbconnect;
