//created by Hatem Ragap
const app = require("./app");
// var http = express();
//before
//const port = process.egitnv.PORT || 3000;
//after kd - 17/08/2020
//const port = 8080;
const port = 3000;

const socketIO = require("socket.io");
const server = require("http").createServer(app);
const io = socketIO(server);

io.onlineUsers = {};

require("./sokets/init.socket")(io);
require("./sokets/convs.socket")(io);
require("./sokets/message.socket")(io);
require("./sokets/publicRoomsSocket")(io);

app.get("/", function (req, res) {
  res.send("server work");
});

server.listen(port, () => {
  console.log("Running on port :"+port);
});
