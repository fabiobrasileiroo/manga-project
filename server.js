const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8080;

// Habilita o CORS para todas as origens
app.use(cors());

app.use(express.static(__dirname + "/dist/manga-project/browser/"));

app.get("/*", (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => {
  const vercelUrl = 'https://manga-project-khaki.vercel.app' || `localhost:${port}`;
  console.log(`Servidor rodando na URL http://${vercelUrl}`);
});
