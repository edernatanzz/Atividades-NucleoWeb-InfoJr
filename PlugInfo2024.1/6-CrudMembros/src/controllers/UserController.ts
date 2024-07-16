import { Request, Response, response } from "express";
import { prisma } from "../database";
import { error } from "console";

export default {
    async createUser(request: Request, response: Response) {
        try {
            console.log("Request Body:", request.body);
            const { name, email, senha, idade, estado, cidade } = request.body;

            if (!email) {
                return response.status(400).json({
                    error: true,
                    message: "Erro: O campo 'email' é obrigatório!"
                });
            }

            const userExists = await prisma.user.findUnique({ where: { email } });

            if (userExists) {
                return response.status(409).json({
                    error: true,
                    message: "Erro: email já existente!"
                });
            }

            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    senha,
                    idade,
                    estado,
                    cidade
                }
            });

            console.log('Usuário criado:', user);

            return response.status(201).json({
                success: true,
                message: "Sucesso: Usuário cadastrado!",
                user
            });
        } catch (error: any) {
            console.error("Erro ao criar usuário:", error);
            return response.status(500).json({ error: true, message: error.message });
        }
    },



    async getUserById(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const user = await prisma.user.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            if (!user) {
                return response.status(404).json({
                    message: "Erro: Usuário não encontrado!"
                });
            }

            return response.status(200).json({
                user
            });
        } catch (error: any) {
            console.error("Erro ao buscar usuário:", error);
            return response.status(500).json({ error: true, message: error.message });
        }
    },

    async getUserByEmail(request: Request, response: Response) {
        try {
            const { email } = request.params;

            if (!email) {
                return response.status(400).json({
                    error: true,
                    message: "Erro: Endereço de email não fornecido!"
                });
            }

            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            });

            if (!user) {
                return response.status(404).json({
                    error: true,
                    message: "Erro: Endereço de email não encontrado na base de dados!"
                });
            }

            return response.status(200).json({
                success: true,
                message: "Sucesso: Usuário encontrado!",
                user
            });
        } catch (error: any) {
            console.log("Erro ao buscar email:", error);
            return response.status(500).json({ error: true, message: error.message });
        }
    },

    async getUserbyName(request: Request, res: Response) {
        try {
            const { name } = request.params;

            if (!name) {
                return res.status(400).json({
                    error: true,
                    message: "Erro, nome não encontrado"
                });
            }

            const users = await prisma.user.findMany({
                where: {
                    name: name
                }
            });

            if (users.length === 0) {
                return res.status(404).json({
                    error: true,
                    message: "Erro, nome não encontrado"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Sucesso, usuários com este nome encontrado(s).",
                users: users
            });
        } catch (error: any) {
            console.log("Erro ao buscar nome:", error);
            return res.status(500).json({
                error: true,
                message: error.message
            });
        }
    },


    async DeletebyId(request: Request, res: Response) {
        try {
            const { id } = request.params;

            const user = await prisma.user.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return res.status(200).json({
                success: true,
                message: "Sucesso, o usuário foi excluído.",
                user: user
            });
        } catch (error: any) {

            if (error.code === 'P2025') {
                return res.status(404).json({
                    error: true,
                    message: "Erro: usuário não encontrado."
                });
            }
            console.log("Erro ao deletar usuário:", error);
            return res.status(500).json({
                error: true,
                message: error.message
            });
        }
    },

    async editById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { name, email, senha, idade, estado, cidade } = request.body;



            const verificaEmail = await prisma.user.findUnique({
                where: {
                    email: email
                }
            });

            if (verificaEmail && verificaEmail.id !== parseInt(id)) {
                return response.status(409).json({
                    error: true,
                    message: "email existente, favor digite outro"
                });
            }

            const user = await prisma.user.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    name,
                    email,
                    senha,
                    idade,
                    estado,
                    cidade
                }
            });

            return response.status(200).json({
                sucesso: true,
                mensagem: "Sucesso, o usuário foi atualizado.",
                user: user
            });
        } catch (error: any) {
            if (error.code === 'P2025') {
                return response.status(404).json({
                    error: true,
                    message: "Erro: usuário não encontrado."
                });
            }
            console.error("Erro ao atualizar usuário:", error);
            return response.status(500).json({
                error: true,
                message: error.message
            });
        }
    }
};
