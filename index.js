const express = require("express");

const server = express();

server.use(express.json());

const movies = [
    "Carrie - A Estranha (1976)",
    "O Iluminado (1980)", 
    "Psicose (1960)",
    "Halloween - A Noite do Terror (1978)",
    "O Exorcista (1973)",
];

const myServer = server.listen(8080, () => {
    const serverPort = myServer.address().port;
    console.log("Servidor em execução na porta %s", serverPort);
});

// CRUD ---> CREATE, READ, UPDATE, DELETE

server.get("/filmes/:index", (req, res) => {
    const { index } = req.params;

    return res.json(movies[index]);
});

server.get("/filmes", (req, res) => {
    return res.json(movies);
});

server.post("/filmes", (req, res) => {
    const { name } = req.body;

    movies.push(name);

    return res.json(movies);
});

server.put("/filmes/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    movies[index] = name;

    return res.json(movies);
});

server.delete("/filmes/:index", (req, res) => {
    const { index } = req.params;

    movies.splice(index, 1);

    return res.json({
        message: "O filme foi deletado da lista com sucesso!"
    });
});
