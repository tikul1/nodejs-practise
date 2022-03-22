const fs = require("fs");

getCurrentFilenames();

fs.rmdir("abc", { recursive: false }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("non recursive : folder deleted!!");
  }
  getCurrentFilenames();
});

fs.rmdir("abc", { recursive: true }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("recursive : folder deleted!!");
  }
  getCurrentFilenames();
});

function getCurrentFilenames() {
  console.log("\ncurrent filename:");
  fs.readdirSync(__dirname).forEach((element) => {
    console.log(element);
  });
}
