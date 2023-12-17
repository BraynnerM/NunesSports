import express from "express";
import { PrismaClient } from "@prisma/client";
const port = 3000;
const app = express();
const prisma = new PrismaClient();
import router from "./routes/routes"

app.use(express.json());

app.use("/api", router);

app.listen(port, async () => {
  console.log(`Servidor em execução em http://localhost:${port}`);

  await prisma.$connect();
  console.log("Conexão com o banco de dados estabelecida");
});

process.on("beforeExit", async () => {
  await prisma.$disconnect();
  console.log("Conexão com o banco de dados encerrada");
});