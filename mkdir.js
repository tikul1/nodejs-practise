const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "test"), { recursive: true }, (err) => {
  //using recursive to avoid error
  if (err) {
    console.log(err);
  }
  console.log("directory created suceesfully!");
});
