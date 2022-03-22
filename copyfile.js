const fs = require("fs");
getCurrentFilenames();
fs.copyFile("hardik3.txt", "hardik4.txt", (err) => {
  if (err) {    
    console.log(err);
  } else {
    getCurrentFilenames();
    console.log(
      "\ncontents of copied file: ",
      fs.readFileSync("hardik4.txt", "utf8")
    );
  }
});

function getCurrentFilenames() {
  console.log("");
  fs.readdirSync(__dirname).forEach((element) => {
    console.log(element);
  });
}
