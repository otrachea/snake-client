const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_LEFT_KEY, MESSAGES } = require("./constants");
const messages = new Map(MESSAGES);
let connection;

const handleUserInput = (data) => {
  if (data === "\u0003") {
    console.log("Connection from server terminated");
    process.exit();
  }

  if (data === MOVE_UP_KEY) {
    connection.write(`Move: w`);
  }
  if (data === MOVE_DOWN_KEY) {
    connection.write(`Move: s`);
  }
  if (data === MOVE_LEFT_KEY) {
    connection.write(`Move: a`);
  }
  if (data === MOVE_RIGHT_KEY) {
    connection.write(`Move: d`);
  }

  if (messages.has(data)) {
    connection.write(`Say: ${messages.get(data)}`);
  }
};

const setupInput = function (conn) {

  // process.on('SIGINT', () => {
  //   console.log('Hey Boss I just Received SIGINT.');
  // });

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput)

  return stdin;
};

module.exports = { setupInput };