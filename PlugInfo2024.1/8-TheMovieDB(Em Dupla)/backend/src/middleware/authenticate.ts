// middleware/authenticate.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: number; // Adicione o userId ao objeto Request
}

export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    console.log(token)
    jwt.verify(token, process.env.JWT_PASS as string, (err, decoded) => {
      console.log(err)

      req.userId = (decoded as { userId: number }).userId;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
