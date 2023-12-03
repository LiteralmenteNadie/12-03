const express = require('express');
const app = express();

const port = 3418;
// app.listen(port, () => {
//     console.log("Escuchando en puerto "+port);
// });

const http = require("http");
const server = http.createServer(app);
server.listen(port);

const socketIo = require("socket.io");
const io = new socketIo.Server(server);

// on
// emit
let conectados = 0;

let mensajes = [
    {
        nombre: "Aylu",
        mensaje: "Asd"
    }
];

io.on("connection", (socket) => {
    conectados += 1;
    io.sockets.emit("connected-total", conectados)
    console.log("Un usuario se conectó");

    io.sockets.emit("mensajes", mensajes);

    socket.on("asdasd", () => {
        console.log("Holi");
    })

    socket.on('nuevo-mensaje', (mensaje) => {
        mensajes.push({
            nombre: mensaje.nombre,
            mensaje: mensaje.mensaje
        })
        io.sockets.emit("mensajes", mensajes);
    });



})

// Middleware (app.use)
// Estos dos permiten procesar los formularios que se le envíen al servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const static = express.static("public");
app.use(static);

const mainRouter = require('./routes/main-router');
app.use(mainRouter);