import { Request, Response } from "express";
import { prisma } from "../database";

class ContadorController {
    async getContadores(request: Request, response: Response) {
        try {
            const numeroDePedidos = await prisma.fila.count();
            const somarPaesVendidos = await prisma.fila.aggregate({
                _sum: {
                    totalPaes: true,
                }
            });

            const somarValorTotal = await prisma.fila.aggregate({
                _sum: {
                    totalAPagar: true,
                }
            });

            return response.json({
                numeroDePedidos: numeroDePedidos,
                quantidadePaesVendidos: somarPaesVendidos._sum.totalPaes || 0,
                valorTotalEmReais: somarValorTotal._sum.totalAPagar || 0
            });
        } catch (error) {
            console.error("Erro ao obter os contadores:", error);
            return response.status(500).json({ message: error.message });
        }
    }
}

export default new ContadorController();
