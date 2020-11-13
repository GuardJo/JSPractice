const Emitter = require("events");
const eventConfig = require("./config");
const em = new Emitter();

em.on(eventConfig.events.GREET, () => {
    console.log("Somewhere, someone said heelo.");
});
em.on(eventConfig.events.GREET, () => {
    console.log("A Greeting occurred!");
});

em.emit(eventConfig.events.GREET);