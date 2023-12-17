"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var client_1 = require("@prisma/client");
var port = 3000;
var app = (0, express_1.default)();
var prisma = new client_1.PrismaClient();
app.get('/', function (req, res) {
    res.send('Bem-vindo ao meu servidor!');
});
app.get('/api/:nome', function (req, res) {
    var nome = req.params.nome;
    res.json({ mensagem: "Ol\u00E1, ".concat(nome, "!") });
});
app.post('/api/enviar', function (req, res) {
    var mensagem = req.body.mensagem;
    res.json({ mensagemRecebida: mensagem });
});
app.listen(port, function () {
    console.log("Servidor est\u00E1 rodando em http://localhost:".concat(port));
});
