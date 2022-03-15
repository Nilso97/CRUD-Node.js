const express = require("express");

const server = express();

server.use(express.json());

const books = [
    "2001 - Uma Odisseia no Espaço - Arthur C. Clarke",
    "Frankenstein - Mary Shelley",
    "Duna - Frank Herbert",
    "Nas Montanhas da Loucura - H. P. Lovecraft",
    "Vinte Mil Léguas Submarinas - Júlio Verne"
];

// Listar um livro
server.get("/livros/:index", (req, res) => {
    const { index } = req.params;

    return res.json(books[index]);
});

// Retorna todos os livros
server.get("/livros", (req, res) => {
    return res.json(books);
});

// Adicionar um novo livro
server.post("/livros", (req, res) => {
    const { name } = req.body;

    books.push(name);

    return res.json(books);
});

// Atualizar um livro
server.put("/livros/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    books[index] = name;

    return res.json(books);
});

// Deletar um livro
server.delete("/livros/:index", (req, res) => {
    const { index } = req.params;

    books.splice(index, 1);

    return res.json({
        message: "O Livro foi deletado da lista com sucesso!"
    });
});

server.listen(3000);
