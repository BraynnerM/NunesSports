"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const port = process.env.PORT || 4000;
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const cors_1 = __importDefault(require("cors"));
//import router from "./routes/routes"
const produtosController_1 = require("./controllers/produtosController");
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
const router = express_1.default.Router();
app.use("/api", router);
router.get("/produtos/", produtosController_1.getProdutos);
router.get("/produtos/id/:id", produtosController_1.getProdutoById);
router.get("/produtos/nome/:nome", produtosController_1.getProdutosByNome);
router.post("/produtos", produtosController_1.createProduto);
router.put("/produtos/:id", produtosController_1.updateProduto);
router.delete("/produtos/:id", produtosController_1.deleteProduto);
app.listen(port, async () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
    await prisma.$connect();
    console.log("Conexão com o banco de dados estabelecida");
});
process.on("beforeExit", async () => {
    await prisma.$disconnect();
    console.log("Conexão com o banco de dados encerrada");
});
