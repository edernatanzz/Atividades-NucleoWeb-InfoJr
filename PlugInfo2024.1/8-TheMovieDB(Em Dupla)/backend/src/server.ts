import { Response, Request } from "express";
import usercontroler from "./controllers/usercontroler";
import loginControler from "./controllers/loginControler";
import cors from "cors";
import { addFavorite, listFavorites, removeFavorite } from "./controllers/favorite.Controller";
import { authenticateJWT } from "./middleware/authenticate";
const express = require('express');
const app = express();
const port = 1080;
require('dotenv').config()

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Aplica o middleware authenticateJWT apenas nas rotas relacionadas aos favoritos
app.use(['/favoritos', '/favoritos/:id'], authenticateJWT);

// Rota de post
app.post('/cadastro', usercontroler.Cadastro);
app.post('/login', loginControler.login);
app.post('/favoritos', addFavorite);

// Rotas get
app.get('/profile', loginControler.getProfile);
app.get('/favoritos', listFavorites);

// Rotas de remove
app.delete('/favoritos/:id', removeFavorite);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
