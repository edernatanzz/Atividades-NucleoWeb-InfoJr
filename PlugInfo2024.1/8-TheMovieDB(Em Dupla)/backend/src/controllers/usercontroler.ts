import { Request, Response } from "express";
import { prisma } from "../database";
import bcrypt from 'bcrypt'

export default {
  async Cadastro(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      const userExist = await prisma.user.findUnique({ where: { email } });

      if (userExist) {
        return response.status(409).json({
          error: true,
          message: "Erro: email já existente!"
        });
      }

      const hashpassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashpassword
        }
      });
      const {password:_ , ...user} = newUser


      console.log('Usuário criado:', newUser);

      return response.status(201).json({
        success: true,
        message: "Sucesso: Usuário cadastrado!",
        user: newUser
      });
    } catch (error: any) {
      console.error("Erro ao criar usuário:", error);
      return response.status(500).json({ error: true, message: error.message });
    }
  }
};
