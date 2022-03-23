const EventEmitter = require("events");

let eventEmitter = new EventEmitter();

eventEmitter.on("error", (err) => {
  console.error("Error occured");
});

eventEmitter.on("newListener", (event, listener) => {
  console.log(`the listener is added to ${event}`);
});

eventEmitter.on("removeListener", (event, listener) => {
  console.log(`the listener is removed from ${event}`);
});

let fun1 = (msg) => {
  console.log("message from fun1: " + msg);
};

let fun2 = (msg) => {
  console.log("message from fun2: " + msg);
};

eventEmitter.on("myEvent", fun1);
eventEmitter.on("myEvent", fun2);

//removing listener from fun1

eventEmitter.off("myEvent", fun1);

eventEmitter.emit("myEvent", "event occured");
eventEmitter.emit("error", new Error("whoops!!"));
