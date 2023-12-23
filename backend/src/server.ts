import express from "express";
import { PrismaClient } from "@prisma/client";
const port = process.env.PORT ? Number(process.env.PORT) : 4000;
const app = express();
const prisma = new PrismaClient();
import cors from 'cors';
//import router from "./routes/routes"
import { getProdutos, getProdutoById, getProdutosByNome, createProduto, updateProduto, deleteProduto } from "./controllers/produtosController"; 

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const router = express.Router();
app.use("/api", router);
router.get("/produtos/", getProdutos);
router.get("/produtos/id/:id", getProdutoById);
router.get("/produtos/nome/:nome", getProdutosByNome);
router.post("/produtos", createProduto);
router.put("/produtos/:id", updateProduto);
router.delete("/produtos/:id", deleteProduto);

app.listen(port, async () => {
  console.log(`Servidor em execução em http://localhost:${port}`);

  await prisma.$connect();
  console.log("Conexão com o banco de dados estabelecida");
});

process.on("beforeExit", async () => {
  await prisma.$disconnect();
  console.log("Conexão com o banco de dados encerrada");
});