const fs = require("fs");

let file = "hardik3.txt";

fs.chown(file, 1541, 999, (error) => {
  if (error) console.log(error);
  else console.log("uid and gid set sucessfully");
});
