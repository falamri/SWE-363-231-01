
// BE_x-exercise_x

const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitter = new CustomEmitter();

module.exports = customEmitter;
