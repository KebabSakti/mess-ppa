import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const port = 1001;

//express middleware
app.use(express.urlencoded({ extended: true }));

//route
app.use("/", (_, res) => res.status(200).json("OKE"));

//global

//route not found 404
app.use("*", (_, res) => res.status(404).json("Resource Not Found"));

server.listen(port);
