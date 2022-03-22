const fs = require("fs");

fs.appendFile("hardik3.txt", "Welcomme ", function (err) {
  if (err) throw err;
  console.log("saved!!");
});

fs.appendFileSync(
  "hardik3.txt",
  " to node js. have a great day",
  function (err) {
    if (err) throw err;
    console.log("new text added");
  }
);
