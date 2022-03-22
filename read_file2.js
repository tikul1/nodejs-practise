//fs.read method is used to read the file specified by fd. this method reads the entire file in buffer
// fs.read(fd, buffer, offset, length, position, callback)
//fd - file descriptor returned by fs.open
//buffer - it is the buffer that the data will be written to
//offset - offset in buffer to start writing at
//length - int spectifying num of bytes to read
//pos - int specifying pos. to start reading. if null it reads from currrent file pos
//call back - err and data



const fs = require('fs');

const buffer =  new Buffer.alloc(1024);
fs.open('hardik2.txt', 'r+', function(err, fd) {
if (err) { 
    console.log(err);
}
console.log("opening file!");
console.log("starts reading!!");

// fs.truncate(fd, 10, function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log("truncating file to 10")
    
    fs.read(fd, buffer, 0, buffer.length, 0, function(err, data) {
    if (err){
        console.log(err);
    } 
    console.log(data + " bytes read ");
    if(data > 0){
        console.log(buffer.slice(0, data).toString());
    }
    fs.close(fd, function(err) {
        if(err) { 
            console.log(err);
        }
        console.log("file closed ");
    });
    
        });
    });
//  });



