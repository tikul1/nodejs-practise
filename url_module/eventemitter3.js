const EventEmitter = require("events");

let eventEmitter1 = new EventEmitter();
let eventEmitter2 = new EventEmitter();
console.log(
  "max listener for eventEmiiter1 is",
  eventEmitter1.getMaxListeners()
);
console.log(
  "max listener for eventEmiiter2 is",
  eventEmitter2.getMaxListeners()
);
//by default maxlistenrs are 10

EventEmitter.defaultMaxListeners = 2;

//setting default maxlisteners to 2
console.log(
  "max listener for eventEmiiter1 is",
  eventEmitter1.getMaxListeners()
);
console.log(
  "max listener for eventEmiiter2 is",
  eventEmitter2.getMaxListeners()
);

//setting maxlisteners to individual eventemitter
eventEmitter1.setMaxListeners(5);

console.log(
  "max listener for eventEmiiter1 is",
  eventEmitter1.getMaxListeners()
);
console.log(
  "max listener for eventEmiiter2 is",
  eventEmitter2.getMaxListeners()
);

let fun1 = (msg) => {
  console.log("message from fun1: " + msg);
};

let fun2 = (msg) => {
  console.log("message from fun2: " + msg);
};
for (let i = 0; i < 3; i++) {
  eventEmitter1.addListener("myEvent1", fun1);
}

for (let i = 0; i < 3; i++) {
  eventEmitter2.addListener("myEvent2", fun2);
}
eventEmitter1.emit("myEvent1", "event1 occured");
eventEmitter2.emit("myEvent2", "event2 occured");
