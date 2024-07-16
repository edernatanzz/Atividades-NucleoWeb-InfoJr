-- CreateTable
CREATE TABLE "Fila" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "totalPaes" INTEGER NOT NULL,
    "totalAPagar" REAL NOT NULL,
    "entrada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Contador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoasNaFila" INTEGER NOT NULL DEFAULT 0,
    "paesVendidos" INTEGER NOT NULL DEFAULT 0,
    "totalEntrada" REAL NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Fila_nome_key" ON "Fila"("nome");
