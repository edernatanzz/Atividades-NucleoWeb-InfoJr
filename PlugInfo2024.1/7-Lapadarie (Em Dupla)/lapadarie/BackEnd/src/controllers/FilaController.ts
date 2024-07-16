import { Request, Response } from "express";
import { prisma } from "../database";

export default {
    async createFila(request: Request, response: Response) {
        try {
            const { nome, totalPaes } = request.body;
            const custoPorPao = 2.50;
            const totalAPagar = totalPaes * custoPorPao;

            console.log("Dados recebidos no corpo da solicitação:", request.body);

            const filaExist = await prisma.fila.findUnique({ where: { nome } });
            if (filaExist) {
                return response.json({
                    error: true,
                    message: 'Erro: o pedido já existe!'
                });
            }

            const fila = await prisma.fila.create({
                data: {
                    nome,
                    totalPaes,
                    totalAPagar
                }
            });
            return response.json({
                error: false,
                message: 'Sucesso: o pedido foi adicionado!',
                fila
            });

        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    },
    async listarPedidos(request: Request, response: Response) {
        try {
            const pedidos = await prisma.fila.findMany();
            return response.json({
                pedidos
            });

        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    },

    async deleteFila(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const filaExist = await prisma.fila.findUnique({ where: { id: parseInt(id) } });
            if (!filaExist) {
                return response.status(404).json({
                    error: true,
                    message: 'Erro: item não encontrado!'
                });
            }

            await prisma.fila.delete({ where: { id: parseInt(id) } });

            return response.json({
                error: false,
                message: ' ${nome} o item foi excluido !'
            });
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }

};
