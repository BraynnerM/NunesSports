import { PrismaClient } from "../../prisma/generated/client";

const prisma = new PrismaClient();

async function getProdutos(_: any, res: any) {
  try {
    const produtos = await prisma.produtos.findMany();
    res.json(produtos);
  } catch (error) {
    console.error("Erro ao obter produtos", error);
    res.status(500).send("Erro interno do servidor");
  }
}

async function getProdutoById(req: any, res: any) {
  try {
    const { id } = req.params;
    const produto = await prisma.produtos.findUnique({
      where: { id: parseInt(id) }
    });

    if (!produto) {
      res.status(404).json({ mensagem: "Produto não encontrado" });
    } else {
      res.json(produto);
    }
  } catch (error) {
    console.error("Erro ao obter produto por ID", error);
    res.status(500).send("Erro interno do servidor");
  }
}

async function getProdutosByNome(req: any, res: any) {
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
  } catch (error) {
    console.error("Erro ao obter produtos por nome", error);
    res.status(500).send("Erro interno do servidor");
  }
}

async function createProduto(req: any, res: any) {
  try {
    const {
      nome_do_produto,
      codigo_do_produto,
      descricao_do_produto,
      preco_do_produto
    } = req.body;

    const novoProduto = await prisma.produtos.create({
      data: {
        nome_do_produto,
        codigo_do_produto,
        descricao_do_produto,
        preco_do_produto
      }
    });

    res.status(201).json(novoProduto);
  } catch (error) {
    console.error("Erro ao criar produto", error);
    res.status(500).send("Erro interno do servidor");
  }
}

async function updateProduto(req: any, res: any) {
  try {
    const { id } = req.params;
    const {
      nome_do_produto,
      codigo_do_produto,
      descricao_do_produto,
      preco_do_produto
    } = req.body;

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
  } catch (error) {
    console.error("Erro ao atualizar produto", error);
    res.status(500).send("Erro interno do servidor");
  }
}

async function deleteProduto(req: any, res: any) {
  try {
    const { id } = req.params;

    const produtoExcluido = await prisma.produtos.delete({
      where: { id: parseInt(id) }
    });

    res.json(produtoExcluido);
  } catch (error) {
    console.error("Erro ao excluir produto", error);
    res.status(500).send("Erro interno do servidor");
  }
}

export {
  getProdutos,
  getProdutoById,
  getProdutosByNome,
  createProduto,
  updateProduto,
  deleteProduto
};
