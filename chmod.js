const fs = require("fs");

console.log("granting read access only");
fs.chmod("hardik2.txt", 0o400, () => {
    console.log("\nreading file contents");
    console.log(fs.readFileSync("hardik2.txt", 'utf8'));
    console.log("\ntrying to write to file");
    try { 
        fs.writeFileSync('hardik2.txt', 'edit this file');
    }
    catch (e) {
        console.log("error code", e.code);
    }
});