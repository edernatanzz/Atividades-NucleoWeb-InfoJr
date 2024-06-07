"use client";
import styled from "styled-components";
import { ImgCard } from "./imgCard1";
import { KeyTextField } from "@prismicio/client";

interface Card1Props {
card : KeyTextField;

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

const ContainerCard = styled.div`
  width: 100%;
  max-width: 600px;
`;

const ConteudoCard = styled.div`
  margin-top: -140px;
  padding: 0.5rem;

  h2 {
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 30px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: -0.02em;
    text-align: left;

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 36px;
    }
  }

  p {
    width: 100%;
    max-width: 383px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-align: left;

    @media (max-width: 480px) {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

const Title = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const Card = styled.div`
  width: 100%;
`;


interface PropsCard1 {
  title : KeyTextField;
}



export function Card1({title}: PropsCard1) {
  return (
    <Container>
      <ContainerCard>
        <Title>Notícia em Destaque</Title>
        <Card>
          <ImgCard />
          <ConteudoCard>
            <h2>{title}</h2>
            <p>A continuação do famoso rogue-like, Hades, chega em forma de...</p>
          </ConteudoCard>
        </Card>
      </ContainerCard>
    </Container>
  );
}
