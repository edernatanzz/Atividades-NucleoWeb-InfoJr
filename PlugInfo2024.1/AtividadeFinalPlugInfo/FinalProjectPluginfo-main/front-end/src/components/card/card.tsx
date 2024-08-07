import React, { useState } from "react";
import Image from "next/image";
import placeholderProduct from "@/assets/imgs/produto-placeholder.png";
import cart from "@/assets/imgs/shopping-cart-solid.png";
import Link from "next/link";
import "./card.css";
import { updateCartProduct } from "@/actions/cartActions"; 
import alta from "@/assets/imgs/em-alta.png";
import fiveStars from "@/assets/imgs/FIVE STARS.png";

interface Produto {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  preco_alterado: number;
  promocao: number;
  descricao: string;
  quantidade_carrinho: number;
  face: boolean;
  labios: boolean;
  olhos: boolean;
  kits: boolean;
  sombrancelha: boolean;
  unhas: boolean;
  original: boolean;
  imagePath: { id: number; url: string; produtoId: number }[];
}

interface CardProps {
  produto: Produto;
}

const Card: React.FC<CardProps> = ({ produto }) => {
  const imgurl = produto.imagePath[0]?.url;
  const id = produto.id;
  const [quantidade, setQuantidade] = useState(produto.quantidade_carrinho);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = async () => {
    const novaQuantidade = quantidade + 1;
    setQuantidade(novaQuantidade);

    try {
      await updateCartProduct(produto.id, novaQuantidade);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000); 
    } catch (error) {
      alert("Erro ao atualizar o carrinho: " + error);
    }
  };

  return (
    <section className="card">
      <Link href={`/produtos/${id}`} passHref>
        <div className="cover">
          <Image src={alta} alt="" className="em-alta" width={300}/>
          <Image
            src={imgurl ? `https://shine-original.s3.sa-east-1.amazonaws.com/${produto.imagePath[0]?.url}` : placeholderProduct}
            alt={produto.nome}
            className="card-img"
            width={370}
            height={370}
          />
        </div>
      </Link>
      <Image src={fiveStars} alt="" className="estrelas"/>
      <h1>{produto.nome}</h1>
      <h2>
        <span>R${produto.preco?.toFixed(2)}</span> R$ {produto.preco_alterado?.toFixed(2)}
      </h2>
      <p>3x sem juros no cartão de crédito</p>

      {showNotification && <div className="notification">Produto adicionado ao carrinho!</div>}

      <button onClick={handleAddToCart}>
        ADICIONE AO CARRINHO <Image src={cart} width={32} alt="" />
      </button>
    </section>
  );
};

export default Card;
