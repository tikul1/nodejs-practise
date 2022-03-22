//chmod syncronous to allow read and write permission
const fs = require("fs");
console.log("giving only read permission");
fs.chmodSync("hardik3.txt", 0o400);

console.log("current file mode:", fs.statSync("hardik3.txt").mode);    //fs/statsync

console.log("File contents : ", fs.readFileSync("hardik3.txt", "utf8"));       

try { 
    console.log("trying to write to file");
    fs.writeFileSync("hardik3.txt", "writing");
}
catch (e) {
    console.log("error found, code:", e.code);
}
//allowing both read and write permission
console.log("allowing both read and write permission");
fs.chmodSync("hardik3.txt", 0o400 | 0o600);                                                                                                                      


console.log("\ncurrent file mode: ", fs.statSync("hardik3.txt").mode);                            //statSync gets all the stats of files and 
                                                            //.mode gives the mode of file from all the stats

console.log("trying to write in file");
fs.writeFileSync("hardik3.txt", "new edited word");

console.log("file contents: ", fs.readFileSync("hardik3.txt", "utf8"));