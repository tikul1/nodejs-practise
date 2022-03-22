//read file async

const fs = require('fs');

fs.readFile('hardik2.txt', 'utf-8', function(err, data) {
    console.log(data);
});
console.log('read file in async');

 
//read file sync


//  fs.readFileSync('hardik2.txt', 'utf-8', function(err, data) {
//      console.log(data);

//  });

//  console.log('read file in sync');

