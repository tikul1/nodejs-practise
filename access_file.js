const { constants } = require("buffer");
const fs = require("fs");

const file = "hardik.parmar.txt";

fs.access(file, constants.fileOk, (err) => {
  console.log(`${file} ${err ? "does not exist" : "exists"}`);
});

//check if the file is readable

fs.access(file, constants.R_OK, (err) => {
  console.log(`${file} ${err ? "is not readable" : "is readable"}`);
});

//check if the file is writable

fs.access(file, constants.W_OK, (err) => {
  console.log(`${file} ${err ? "is not writable" : "is writable"}`);
});

//check if not readble or writable

fs.access(file, constants.W_OK | constants.R_OK, (err) => {
  console.log(`${file} ${err ? "is not " : "is"} 'readable and writable'}`);
});
