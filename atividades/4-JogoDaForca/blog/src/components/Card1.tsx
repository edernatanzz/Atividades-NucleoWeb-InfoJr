"use client";
import styled from "styled-components"
import { ImgCard } from "./imgCard1";
interface Card1Props { }

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

`;
const ContainerCard = styled.div`

`
const ConteudoCard = styled.div`
    margin-top: -140px;
    padding: 0.5rem;
h2{
    color: white;

    font-family: 'Inter', sans-serif;
    font-size: 30px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: -0.02em;
    text-align: left;

}

p{
    width: 383px;
    height:72px;
    color: white;
    

    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-align: left;

}
`
const Title = styled.div`
color:white;

display: flex;
justify-content: center;
aling-itens: center;

font-family: inherit;
font-size: 32px;
font-weight: 700;
line-height: 48px;
letter-spacing: -0.02em;
text-align: left;

`
const Card = styled.div`

`

export function Card1() {
    return (
        <Container>
            <ContainerCard>
                <Title>Noticia em Destaque</Title>
                <Card>
                <ImgCard/>
                <ConteudoCard>
                   <h2>Hades 2, uma continuação divina.</h2>
                   <p>A continuação do famoso rogue-like, Hades, chega em forma de...</p>
                </ConteudoCard>
                </Card>
            </ContainerCard>
        </Container>
    )
}