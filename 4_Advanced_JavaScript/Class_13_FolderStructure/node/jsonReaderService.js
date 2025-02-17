const fs = require("fs");

const fileName = `jsonDatabase.txt`;

const service = {
  addData: function (data) {
    let strData = JSON.stringify(data);
    fs.writeFile(fileName, strData, (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(`The data is saved`);
      }
    });
  },
  readData: function () {
    let strData = fs.readFileSync(fileName, { encoding: `utf-8` });
    return JSON.parse(strData);
  },
  appendData: function (data) {
    let readData = this.readData();
    let newData = { ...readData, ...data };
    let strData = JSON.stringify(newData);
    fs.writeFile(fileName, strData, (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Appending to file is successfull");
      }
    });
  },
};

module.exports = service;
