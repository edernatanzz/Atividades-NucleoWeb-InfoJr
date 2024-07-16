import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { prisma } from "../database";
import bcrypt from 'bcrypt';

type JWTPayload = {
    id: number;
}

type User = {
    id: number;
    email: string;
    password: string;
    [key: string]: any; // Para incluir outras propriedades do usuário
}

const messages = {
    missingCredentials: "Email e senha são obrigatórios.",
    invalidCredentials: "Email ou senha inválidos.",
    loginSuccess: "Login realizado com sucesso.",
    userNotFound: "Usuário não encontrado.",
    unauthorized: "Não autorizado",
    serverError: "Internal Server Error"
}

export default {
    async login(request: Request, response: Response) {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({
                error: true,
                message: messages.missingCredentials
            });
        }

        const user: User | null = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return response.status(401).json({
                error: true,
                message: messages.invalidCredentials
            });
        }

        const verifyPassword = await bcrypt.compare(password, user.password);

        if (!verifyPassword) {
            return response.status(401).json({
                error: true,
                message: messages.invalidCredentials
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '9999999' });
        console.log(`header: ${request.header}`)

        return response.status(200).json({
            error: false,
            message: messages.loginSuccess,
            token: token
        });
    },

    async getProfile(request: Request, response: Response) {
        try {
            const authHeader = request.headers.authorization;

            if (!authHeader) {
                return response.status(401).json({
                    error: true,
                    message: messages.unauthorized
                });
            }

            const token = authHeader.split(' ')[1];

            if (!token) {
                return response.status(401).json({
                    error: true,
                    message: messages.unauthorized
                });
            }

            const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JWTPayload;

            const user: User | null = await prisma.user.findUnique({ where: { id } });

            if (!user) {
                return response.status(401).json({
                    error: true,
                    message: messages.userNotFound
                });
            }

            const { password, ...loggedUser } = user;

            return response.status(200).json({
                error: false,
                ...loggedUser,
                userId: user.id
            });

        } catch (error) {
            console.error('Error fetching profile:', error);
            return response.status(500).json({
                error: true,
                message: messages.serverError
            });
        }
    }
};
