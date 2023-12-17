import express from 'express';
import { PrismaClient } from "@prisma/client";
const port = 3000;
const app = express();
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor!');
});


app.get('/api/:nome', (req, res) => {
  const { nome } = req.params;
  res.json({ mensagem: `Olá, ${nome}!` });
});


app.post('/api/enviar', (req, res) => {
  const { mensagem } = req.body;
  res.json({ mensagemRecebida: mensagem });
});


app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});