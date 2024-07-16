import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { IconDolar, IconLoja, IconUser } from "@/assets/logo";

interface ContadorProps {}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  margin-top: -65px;

  @media only screen and (max-width: 768px) {
    display:flex;
    flex-direction:column;
    }
}
`;

const Wrapper = styled.div`
  width: 395px;
  height: 136px;
  background-color: white;
  padding: 1.25rem;
  @media only screen and (max-width: 768px) {
    width: 80%;
    height:auto;
}
`;

const WrapperEntrada = styled(Wrapper)`
  background-color: var(--colorEntrada);
`;

const FlexEst = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Aling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PessoaText = styled.div`
  margin-bottom: 10%;
`;

const EntradaText = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-bottom: 10%;
`;

const ValorText = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export function Contador(props: ContadorProps) {
  const [contadores, setContadores] = useState({
    numeroDePedidos: 0,
    quantidadePaesVendidos: 0,
    valorTotalEmReais: 0,
  });

  useEffect(() => {
    const fetchContadores = async () => {
      try {
        const response = await axios.get("http://localhost:1080/contadores");
        setContadores(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContadores();
    const intervalId = setInterval(fetchContadores, 0);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <Container>
      <Wrapper>
        <Aling>
          <FlexEst>
            <PessoaText>Pessoas na fila</PessoaText>
            <div><IconUser /></div>
          </FlexEst>
          <div>{contadores.numeroDePedidos}</div>
        </Aling>
      </Wrapper>

      <Wrapper>
        <Aling>
          <FlexEst>
            <PessoaText>Pães Vendidos</PessoaText>
            <div><IconLoja /></div>
          </FlexEst>
          <div>{contadores.quantidadePaesVendidos}</div>
        </Aling>
      </Wrapper>

      <WrapperEntrada>
        <Aling>
          <FlexEst>
            <EntradaText>Entrada</EntradaText>
            <div><IconDolar /></div>
          </FlexEst>
          <ValorText>R${contadores.valorTotalEmReais.toFixed(2)} </ValorText>
        </Aling>
      </WrapperEntrada>
    </Container>
  );
}
