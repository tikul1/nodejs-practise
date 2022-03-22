const fs = require("fs");

console.log("contents of the text file : ");
console.log(fs.readFileSync("hardik3.txt", 'utf8'));

fs.link("hardik3.txt", "linkedfile.txt", (err) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log("contents of the linked file ");
            console.log(fs.readFileSync("linkedfile.txt", 'utf8'));
    }
});
