const events = require("events");

const em = new events.EventEmitter();

em.on("FirstEvent", (data) => {
  console.log(data);
});
em.emit("FirstEvent", "this is my first node js eventemitter");
