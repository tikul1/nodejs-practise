//open a file in async

const fs = require("fs");

fs.open("hardik.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("saved!!!");
});

//open a file in sync

// fs.openSync('hardik2.txt', 'r');

// console.log('!!!');
