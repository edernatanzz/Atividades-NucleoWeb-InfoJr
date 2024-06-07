import { Request, Response } from "express";
import { prisma } from "../database";
import { error } from "console";

export default {
    async ListPost(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const post = await prisma.post.findUnique({ where: {id : Number(id)}});
            if(!post){
                return response.status(201).json({
                    error:true,
                    message: "Error: post não encontrado!",
                });
            }



        } catch (error: any) {
            console.error("Erro ao criar Post:", error);
            return response.status(500).json({ error: true, message: error.message });
        }
    },
    async createPost(request: Request, response: Response) {
        try {
            console.log("Request Body:", request.body);
            const { title, content, userId } = request.body;

            const post = await prisma.post.create({
                data: {
                    title,
                    content,
                    userId
                }
            });

            return response.status(201).json({
                success: true,
                message: "Sucesso: Post cadastrado!",
                userId
            });
        } catch (error: any) {
            console.error("Erro ao criar Post:", error);
            return response.status(500).json({ error: true, message: error.message });
        }
    }
};
