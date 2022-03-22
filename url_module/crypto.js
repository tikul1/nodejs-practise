var crypto = require('crypto');

var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('abc', 'utf8', 'hex')
mystr += mykey.final('hex');

console.log(mystr);

var crypto = require('crypto');

var mykey2 = crypto.createDecipher('aes-128-cbc', 'mypassword');
var mystr2 = mykey2.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
mystr2 += mykey2.final('utf8');

console.log(mystr2); 