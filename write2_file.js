const fs = require('fs');

fs.writeFile('hardik2.txt', 'welcome Hardik', function(err) {
    if (err) throw err;
    console.log('Replaced!');
});