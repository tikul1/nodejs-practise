const fs = require('fs');

fs.rename('hardik.txt', 'hardik.parmar.txt', function(err) {
    if (err) throw err;
    console.log("file renamed");
});