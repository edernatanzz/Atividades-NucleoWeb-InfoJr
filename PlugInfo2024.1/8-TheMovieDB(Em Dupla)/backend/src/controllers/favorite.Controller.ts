import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

type JWTPayload = {
  id: number;
};

// Adicionar um novo favorito para o usuário
export const addFavorite = async (req: Request, res: Response): Promise<void> => {
  try {
    const { movieId } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    const { id } = jwt.verify(token!, process.env.JWT_PASS!) as JWTPayload;

    // Verifica se o filme já está nos favoritos do usuário
    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_movieId: {
          userId: id,
          movieId: Number(movieId),
        },
      },
    });

    if (existingFavorite) {
      res.status(400).json({ error: 'Filme já está nos favoritos.' });
      return;
    }

    // Cria um novo favorito
    const favorite = await prisma.favorite.create({
      data: {
        movieId: Number(movieId),
        userId: id,
      },
    });

    res.status(201).json(favorite);
  } catch (error) {
    console.error('Erro ao adicionar favorito:', error);
    res.status(500).json({ error: 'Erro interno ao adicionar favorito.' });
  }
};

// Listar todos os favoritos de um usuário
export const listFavorites = async (req: Request, res: Response): Promise<void> => {
  try {
  
    const token = req.headers.authorization?.split(' ')[1];

    
    const { id } = jwt.verify(token!, process.env.JWT_PASS!) as JWTPayload;

<<<<<<< HEAD
    // Busca todos os favoritos do usuário
=======
    
>>>>>>> 0318f823d99d7b019d8d1903bfdfd870d111ce4c
    const favorites = await prisma.favorite.findMany({
      where: {
        userId: id,  
      },
    });

    
    res.json(favorites);
  } catch (error) {
    console.error('Erro ao buscar favoritos:', error);
    res.status(500).json({ error: 'Erro interno ao buscar favoritos.' });
  }
};


// Remover um favorito específico
export const removeFavorite = async (req: Request, res: Response): Promise<void> => {
  try {
    const favoriteId = Number(req.params.id);

    await prisma.favorite.delete({
      where: {
        id: favoriteId,
      },
    });

    res.status(200).json({ message: 'Favorito removido com sucesso.' });
  } catch (error) {
    console.error('Erro ao remover favorito:', error);
    res.status(500).json({ error: 'Erro interno ao remover favorito.' });
  }
};
