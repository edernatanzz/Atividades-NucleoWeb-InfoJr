import React from 'react';
import styled from 'styled-components';

const Scoreboard = styled.div`
width: 100%;
  background-color: gren;
  padding: 10px auto;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  height: auto;

  @media (max-width: 768px) {
    padding: 4rem;
  }
`;

const PlacarItem = styled.p`
  font-size: 20px; 
  margin: 3px 0; 
  color: #333;
`;

const PlacarItens = styled.div`
  width:70%;
  display: flex;
  justify-content: space-around; 
  align-items: center; 
  border: 1px solid white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px; 
  }
`;

const Vitória = styled(PlacarItem)`
  color: green;
`;

const Derrota = styled(PlacarItem)`
  color: red;
`;
const Placartext = styled.h3`
width:100%;
@media (max-width: 768px) {
width:70%;
}
`;

interface PlacarProps {
  vitórias: number;
  derrotas: number;
}

const Placar: React.FC<PlacarProps> = ({ vitórias, derrotas }) => {
  return (
    <Scoreboard>
      <Placartext>Placar</Placartext>
      <PlacarItens>
        <Vitória>Vitórias: {vitórias}</Vitória>
        <Derrota>Derrotas: {derrotas}</Derrota>
      </PlacarItens>
    </Scoreboard>
  );
}

export default Placar;
