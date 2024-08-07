'use client'
import React from "react";
import styled from "styled-components";
import { Marca1, Marca2, Marca3 } from "../assets/imgs";

const Container = styled.div`
  width: 100%;
  height: auto; 
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Imagens = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3%;
  margin-top: -5rem; 
  z-index: 9999;

  img {
    width:20vw;
    height: auto; 
    max-width: 100%; 
  }

`;

const Slider2 = () => {
  return (
    <Container>
      <Imagens>
        <Marca1 />
        <Marca2 />
        <Marca3 />
      </Imagens>
    </Container>
  );
};

export default Slider2;
