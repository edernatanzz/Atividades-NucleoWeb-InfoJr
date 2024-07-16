import express, { Request, Response } from "express";
import UserController from "./controllers/UserController";
import PostControler from "./controllers/PostControler";

const app = express();
const port = 3000;

app.use(express.json());
//method get//
app.get('/', (req: Request, res: Response) => {
    return res.send({ message: 'Local host : 3000' });
});
app.get('/user/:id', UserController.getUserById);
app.get('/user/email/:email', UserController.getUserByEmail);
app.get('/user/name/:name', UserController.getUserbyName);
app.get('/createUser/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});
//method post//
app.post('/createUser', UserController.createUser);
//metod delete//
app.delete('/delete/:id', UserController.DeletebyId);
//method put//
app.put('/user/:id', UserController.editById)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
