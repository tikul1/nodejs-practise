//async eventemitter

const EventEmitter = require("events");

let em = new EventEmitter();

em.on("myEvent", (msg) => {
  setImmediate(() => {
    //setimmediate execute in the next iteraation in a loop
    console.log("Message: " + msg);
  });
});

let fun = (msg) => {
  console.log("message from fun: " + msg);
};
em.on("myEvent", fun);
em.emit("myEvent", "event occured");
