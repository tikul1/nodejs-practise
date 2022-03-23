const EventEmitter = require("events");

var eventEmitter = new EventEmitter();

var geek1 = (msg) => {
  console.log("Message from geek1: " + msg);
};

var geek2 = (msg) => {
  console.log("Message from geek2: " + msg);
};

eventEmitter.on("myEvent", geek1);
eventEmitter.on("myEvent", geek1);
eventEmitter.on("myEvent", geek2);

eventEmitter.removeListener("myEvent", geek1);

eventEmitter.emit("myEvent", "Event occurred");

eventEmitter.removeAllListeners("myEvent");

eventEmitter.emit("myEvent", "Event occurred");
