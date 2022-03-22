//buffer for text 'abc'

const buffer = Buffer.from("abc");
console.log(buffer);

//buffer for 15 byte size  length of 0 value

const buf = Buffer.alloc(15);
console.log(buf);

//buffer for 10 byte of 1 value

const buf1 = Buffer.alloc(10, 1);
console.log(buf1);

//10 size length un initialized buffer
//might contain old data. need to be overwritten using write/fill or any other writing function

const buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

//buffer containing [1, 2, 3]

const buf3 = Buffer.from([1, 2, 3]);
console.log(buf3);

//containing latin1 bytes

const buf4 = Buffer.from("XYZ", "latin1");
console.log(buf4);

//iteration in buffer

// const buf5 = Buffer.from([1, 2, 3, 4, 5, 6, 7]);

// for (const a of buf5) {
//     console.log(a);
// }

//creating array of buffer

// const buf6 = Buffer.from([1, 2, 3, 4]);
// const array = new Array(buf6);
// console.log(array);

//buffer fill unallocated buffer

// buf7 = Buffer.allocUnsafe(10);
// console.log(buf7);
// buf7.fill(2);
// console.log(buf7);

//assigning 2 buffers into 1 array and comparing

// buf8 = Buffer.from('1234');
// buf9 = Buffer.from('0123');
// const array1 = [buf8, buf9];

// console.log(array1.sort(Buffer.compare));

//finding total length and concating buffer

// const buf10 = Buffer.alloc(3);
// const buf11 = Buffer.alloc(5);
// const buf12 = Buffer.alloc(7);
// const totalLength = buf10.length + buf11.length + buf12.length;

// console.log(totalLength);                                                 //total length

// const bufA = Buffer.concat([buf10, buf11, buf12], totalLength);           //concating buffers

// console.log(bufA);
// console.log(bufA.length);

// buffer to JSON

// const buf13 = Buffer.alloc(9);
// const json = JSON.stringify(buf13);
// console.log(json);
