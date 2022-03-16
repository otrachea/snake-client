let connection;

const handleUserInput = (data) => {
  if (data === "\u0003") {
    console.log("Connection from server terminated");
    process.exit();
  }

  if (['w', 'a', 's', 'd'].includes(data)) {
    connection.write(`Move: ${data}`);
  }

  if (data === '1') {
    connection.write('Say: Eat this!');
  }

  if (data === '2') {
    connection.write('Say: Watch out!');
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