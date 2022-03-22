const fs = require("fs");

fs.writeFile("hardik3.txt", "Hello content!!!!!", function (err) {
  if (err) throw err;
  console.log("saved!!!!!!!");
});

// fs.writeFileSync('hardik2.txt', 'have a great day ahead', function(err) {
//     if (err) throw err;

//     console.log('written syncronously');
// });
