import http from "http";
import express from "express";
import cors from "cors";
import {Server} from "socket.io";

const app = express();
const port=4500 || process.env.PORT;

app.use(cors());
app.get("/",(req,res) => {
    res.send("Working...");
})

const server = http.createServer(app);
const io = new Server();

io.on("connection",() => {
    console.log('New Connection');
})

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});