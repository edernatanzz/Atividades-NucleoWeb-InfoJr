import axios from "axios";
import React, { useEffect, useState } from "react";

interface Pedido {
  id: number;
  nome: string;
  totalPaes: number;
  totalAPagar: number; 
}

export function Pedidosteste() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get('http://localhost:1080/listarPedidos');
      setPedidos(response.data.pedidos);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:1080/delete/${id}`);
      setPedidos((prevPedidos) => prevPedidos.filter(pedido => pedido.id !== id));
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
     {Array.isArray(pedidos) && pedidos.map((pedido) => (
        <div key={pedido.id}>
          <p>Nome: {pedido.nome}</p>
          <p>Total de Pães: {pedido.totalPaes}</p>
          <p>Total a Pagar: {pedido.totalAPagar}</p> 
          <button onClick={() => handleDelete(pedido.id)}>excluir</button>
        </div>
      ))}
    </>
  );
}
