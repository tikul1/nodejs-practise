const fs = require("fs");

getCurrentFilenames();

fs.rmdir("test", () => {
  console.log("folder deleted!!");
  getCurrentFilenames();
});

function getCurrentFilenames() {
  console.log("\ncurrent filename:");
  fs.readdirSync(__dirname).forEach((element) => {
    console.log(element);
  });
}
