"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduto = exports.updateProduto = exports.createProduto = exports.getProdutosByNome = exports.getProdutoById = exports.getProdutos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function getProdutos(_, res) {
    try {
        const produtos = await prisma.produtos.findMany();
        res.json(produtos);
    }
    catch (error) {
        console.error("Erro ao obter produtos", error);
        res.status(500).send("Erro interno do servidor");
    }
}
exports.getProdutos = getProdutos;
async function getProdutoById(req, res) {
    try {
        const { id } = req.params;
        const produto = await prisma.produtos.findUnique({
            where: { id: parseInt(id) }
        });
        if (!produto) {
            res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        else {
            res.json(produto);
        }
    }
    catch (error) {
        console.error("Erro ao obter produto por ID", error);
        res.status(500).send("Erro interno do servidor");
    }
}
exports.getProdutoById = getProdutoById;
async function getProdutosByNome(req, res) {
    try {
        const { nome } = req.params;
        const produtos = await prisma.produtos.findMany({
            where: {
                nome_do_produto: {
                    contains: nome.toLowerCase(),
                    mode: 'insensitive',
                }
            }
        });
        res.json(produtos);
    }
    catch (error) {
        console.error("Erro ao obter produtos por nome", error);
        res.status(500).send("Erro interno do servidor");
    }
}
exports.getProdutosByNome = getProdutosByNome;
async function createProduto(req, res) {
    try {
        const { nome_do_produto, codigo_do_produto, descricao_do_produto, preco_do_produto } = req.body;
        const novoProduto = await prisma.produtos.create({
            data: {
                nome_do_produto,
                codigo_do_produto,
                descricao_do_produto,
                preco_do_produto
            }
        });
        res.status(201).json(novoProduto);
    }
    catch (error) {
        console.error("Erro ao criar produto", error);
        res.status(500).send("Erro interno do servidor");
    }
}
exports.createProduto = createProduto;
async function updateProduto(req, res) {
    try {
        const { id } = req.params;
        const { nome_do_produto, codigo_do_produto, descricao_do_produto, preco_do_produto } = req.body;
        const produtoAtualizado = await prisma.produtos.update({
            where: { id: parseInt(id) },
            data: {
                nome_do_produto,
                codigo_do_produto,
                descricao_do_produto,
                preco_do_produto
            }
        });
        res.json(produtoAtualizado);
    }
    catch (error) {
        console.error("Erro ao atualizar produto", error);
        res.status(500).send("Erro interno do servidor");
    }
}
exports.updateProduto = updateProduto;
async function deleteProduto(req, res) {
    try {
        const { id } = req.params;
        const produtoExcluido = await prisma.produtos.delete({
            where: { id: parseInt(id) }
        });
        res.json(produtoExcluido);
    }
    catch (error) {
        console.error("Erro ao excluir produto", error);
        res.status(500).send("Erro interno do servidor");
    }
}
exports.deleteProduto = deleteProduto;
