const handleUserInput = (data) => {
  if (data === "\u0003") {
    console.log("Connection from server terminated");
    process.exit();
  }

};

const setupInput = function () {

  // process.on('SIGINT', () => {
  //   console.log('Hey Boss I just Received SIGINT.');
  // });

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput)

  return stdin;
};

module.exports = { setupInput };