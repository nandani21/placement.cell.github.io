const Student = require("../models/userSchema");
const fs = require("fs");
const path = require("path");

module.exports.downloadCSV = async function (req, res) {
  try {
    const arrayStudent = await Student.find({});
    let serialNumber = 1,
      entry = "";
    let fileData =
      "S.No, Batch, Name, Gender, Email, phone No, College, Status, DSA, WebD, React";
    for (slist of arrayStudent) {
      entry =
        serialNumber +
        "," +
        slist.batch +
        "," +
        slist.name +
        "," +
        slist.gender +
        "," +
        slist.email +
        "," +
        slist.phoneno +
        "," +
        slist.college +
        "," +
        slist.placestatus +
        "," +
        slist.dsa +
        "," +
        slist.web +
        "," +
        slist.react;
      serialNumber++;
      fileData += "\n" + entry;
    }
    const file = fs.writeFile(
      "uploads/data.csv",
      fileData,
      function (err, data) {
        if (err) {
          console.log(err);
          return res.redirect("back");
        }
        return res.download("uploads/data.csv");
      }
    );
  } catch (err) {
    console.log(err);
  }
};