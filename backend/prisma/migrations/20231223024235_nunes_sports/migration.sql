-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "nome_do_produto" VARCHAR(255) NOT NULL,
    "codigo_do_produto" VARCHAR(50) NOT NULL,
    "descricao_do_produto" TEXT,
    "preco_do_produto" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "produtos_codigo_do_produto_key" ON "produtos"("codigo_do_produto");
