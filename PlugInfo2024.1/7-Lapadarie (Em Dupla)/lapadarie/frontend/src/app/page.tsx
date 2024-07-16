'use client'
import { Contador } from "@/componentes/contador/contador";
import { Footer } from "@/componentes/footer/footer";
import { Header } from "@/componentes/header/header";
import { Pedidos } from "@/componentes/pedidos/pedidos";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <Contador />
      <Pedidos />
      <Footer/>
    </>

  );
}
