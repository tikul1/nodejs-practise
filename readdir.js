const fs = require("fs");
fs.readdir(__dirname, (err, files) => {
  if (err) console.log(err);
  else {
    console.log("current directory filenames : ");
    files.forEach((file) => {
      console.log(file);
    });
  }
});

//dirname using withfiletypes

fs.readdir(__dirname, { withFileTypes: true }, (err, files) => {
  console.log("\ncurrent directory files");
  if (err) cconsole.log(err);
  else {
    files.forEach((file) => {
      console.log(file);
    });
  }
});
