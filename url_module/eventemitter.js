const events = require("events");

const em = new events.EventEmitter();

em.on('FirstEvent', function(data) {
    console.log('First Subscriber', + data);
});
em.emit('FirstEvent', 'this is my first node js eventemitter');