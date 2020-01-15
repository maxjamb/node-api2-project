const express = require("express");
const cors = require("cors");

const postsRouter = require("./posts/postsRouter");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/posts", postsRouter);

module.exports = server;
