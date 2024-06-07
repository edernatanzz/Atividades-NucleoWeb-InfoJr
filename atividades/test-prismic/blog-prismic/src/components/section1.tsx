"use client";
import { ImgCardSection } from "@/assets/imgcardSection";
import { Picture } from "@/assets/picture";
import { ImageField, KeyTextField } from "@prismicio/client";
import styled from "styled-components";
import { PrismicNextImage } from '@prismicio/next'

const Container = styled.section`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 1;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ConteudoSection = styled.div`
  width: 385px;
  height: 557px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  gap: 16px;
  border-radius: 10px 0px 0px 0px;
  opacity: 1;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Tag = styled.p`
  width: 23%;
  height: 32px;
  padding: 5px 11px;
  border-radius: 16px;
  background: var(--blue);
  color: white;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  line-height: 19.5px;
  letter-spacing: -0.02em;
  text-align: left;
`;

const ContainerConteudo = styled.div`
  margin-bottom: 20px;
  h1 {
    width: 337px;
    height: 80px;
    opacity: 0px;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: left;

    @media (max-width: 480px) {
      font-size: 18px;
      line-height: 28px;
    }
  }

  p {
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    line-height: 22.5px;
    letter-spacing: -0.02em;
    text-align: left;

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    line-height: 19.5px;
    letter-spacing: -0.02em;
    text-align: left;

    @media (max-width: 480px) {
      font-size: 11px;
      line-height: 17px;
    }
  }

  p {
    font-family: inherit;
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.02em;
    text-align: left;

    @media (max-width: 480px) {
      font-size: 8px;
      line-height: 12px;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Data = styled.p`
  margin-left: 20px;
`;

interface SectionOneProps {
  cardtag:KeyTextField;
  cardtitle: KeyTextField;
  cardsubtitle: KeyTextField;
  imgcard: ImageField;
}

export function SectionOne( {cardtag, cardtitle, cardsubtitle, imgcard }: SectionOneProps) {
  return (
    <Container>
      <ConteudoSection>
        <ContainerConteudo>
        {imgcard && <PrismicNextImage field={imgcard} />}
          <Tag>{cardtag}</Tag>
          <h1>{cardtitle}</h1>
          <p>
            {cardsubtitle}
          </p>
        </ContainerConteudo>
        <Perfil>
          <Icon>
            <Picture />
            <h1>Ruan Correia</h1>
          </Icon>
          <Data>24/05/2004</Data>
        </Perfil>
      </ConteudoSection>

      <ConteudoSection>
        <ContainerConteudo>
          <ImgCardSection />
          <Tag>Jogos</Tag>
          <h1>“Que vontade de um bolo de pote”</h1>
          <p>
            Designer de jogos diz que comer um bolo de pote além de manter a
            consistência no trabalho auxilia na concentração
          </p>
        </ContainerConteudo>
        <Perfil>
          <Icon>
            <Picture />
            <h1>Ruan Correia</h1>
          </Icon>
          <Data>24/05/2004</Data>
        </Perfil>
      </ConteudoSection>

      <ConteudoSection>
        <ContainerConteudo>
          <ImgCardSection />
          <Tag>Jogos</Tag>
          <h1>“Que vontade de um bolo de pote”</h1>
          <p>
            Designer de jogos diz que comer um bolo de pote além de manter a
            consistência no trabalho auxilia na concentração
          </p>
        </ContainerConteudo>
        <Perfil>
          <Icon>
            <Picture />
            <h1>Ruan Correia</h1>
          </Icon>
          <Data>24/05/2004</Data>
        </Perfil>
      </ConteudoSection>
    </Container>
  );
}
