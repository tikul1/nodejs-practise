const url = require("url");
const myUrl = new URL("http://myweb.com:8000/hello.html?id=100Y&status=active");


//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());          //to pass url as a string. by default URL is in object

//host
console.log(myUrl.host);    //includes host
console.log(myUrl.hostname);  //does not get port

//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//object

console.log(myUrl.searchParams);

//add params

myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//loop through params

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
