//! required module to work with file system

const fs = require(`fs`);
const { text } = require("stream/consumers");

// console.log(fs);

//! file path

const filePath = `./test.txt`;

module.exports = {
  addText: function (string) {
    //! write file as paramaters takes the: 1 file path, the variable where we want to write and callback fnc
    fs.writeFile(filePath, string, function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("The file is saved");
    });
  },
  appendTxt: function (string) {
    fs.appendFile(filePath, string, function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("The text was added to the file");
    });
  },
  readText: function () {
    return fs.readFileSync(filePath, { encoding: `utf-8` });
  },
};
