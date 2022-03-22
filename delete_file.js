const fs = require("fs");

fs.unlink("hardik.txt", function (err) {
  if (err) throw err;
  console.log("deleted");
});

// fs.unlink('hardik.parmar.txt', function(err) {
//     if (err) throw err;
//     console.log('daleted part 2');
// })
