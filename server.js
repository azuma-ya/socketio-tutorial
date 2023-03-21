const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 5000;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	console.log("ユーザーが接続しました");

	socket.on("chat message", (msg) => {
		// console.log(msg);
		io.emit("chat message", msg);
	});
});

server.listen(PORT, () => {
	console.log(`server is running on PORT ${PORT}`);
});
