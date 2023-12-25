import express from "express";
import { PrismaClient } from "../prisma/generated/client";
const port = process.env.PORT ? Number(process.env.PORT) : 4000;
const app = express();
const prisma = new PrismaClient();
import cors from 'cors';
import router from "./routes/routes"


const corsOptions = {
  origin: 'https://nunes-sports-frontend.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
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