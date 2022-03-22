const fs = require("fs");

getCurrentFilenames();
fs.rmSync("./abc", { recursive: true });
getCurrentFilenames();

function getCurrentFilenames() {
  console.log("current filenames: ");
  fs.readdirSync(__dirname).forEach((element) => {
    console.log(element);
  });
}
