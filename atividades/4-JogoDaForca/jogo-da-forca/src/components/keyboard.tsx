import styled from 'styled-components';
import { useState } from 'react';

const Keys = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 0.5rem;
  margin-top: 2rem;
  width: 400px;

  @media (max-width: 768px) {
    width: 60%;
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  }
`;

const Button = styled.button<{ isActive: boolean }>`
  padding: 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
  border: 1px solid #ccc;
  border-radius: 5px;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.3')};
  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#e0e0e0' : '')};
  }
`;

interface KeyboardProps {
  disabled?: boolean;
  letrasAtivas: string[];
  letrasInativas: string[];
  addGuessedLetter: (letter: string) => void;
}

export default function Keyboard({
  disabled = false, 
  letrasAtivas,
  letrasInativas,
  addGuessedLetter,
}: KeyboardProps) {
  const handleClick = (letter: string) => {
    addGuessedLetter(letter);
  };

  return (
    <Wrapper>
      {Keys.map((letter) => {
        const isActive = !letrasAtivas.includes(letter) && !letrasInativas.includes(letter);
        return (
          <Button
            key={letter}
            isActive={isActive || disabled} 
            onClick={() => handleClick(letter)}
            disabled={!isActive}
          >
            {letter.toUpperCase()}
          </Button>
        );
      })}
    </Wrapper>
  );
}
