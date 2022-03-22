const { dir } = require("console");
const fs = require("fs");

console.log("opening directory");

fs.opendir("url_module", { encoding: "utf-8", bufferSize: 64 }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("path of the directory : ", data.path);
    console.log("\nclosing directory");
    data.closeSync();
  }
});
