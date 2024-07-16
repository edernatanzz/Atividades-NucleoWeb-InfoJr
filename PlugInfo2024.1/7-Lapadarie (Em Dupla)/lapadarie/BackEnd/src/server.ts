import Express from "express";
import cors from "cors";
import FilaController from "./controllers/FilaController";
import ContadorControler from "./controllers/ContadorControler";

const app = Express();
app.use(Express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

const PORT = 1080;
const VALOR_PAO = 2.50;//futuramente consultar o valor na tabela

app.get('/', (request, response) => {
  return response.send({ user: "teste" });
});

//metodos Get
app.get('/listarPedidos', FilaController.listarPedidos)
app.get('/contadores', ContadorControler.getContadores)
//metodos post
app.post('/createFila', FilaController.createFila)
//metodos delete
app.delete('/delete/:id', FilaController.deleteFila);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
