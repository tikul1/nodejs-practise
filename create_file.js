const fs = require("fs");

fs.appendFile('hardik.txt', 'Hello content', function(err) {
    if (err) throw err;
    console.log("saved!");
});