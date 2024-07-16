import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    font-size: 1.5rem;
    gap: 0.3rem;
    margin-left: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    gap: 0.2rem;
  }
`;

const LetterWrapper = styled.span`
  border-bottom: 0.1em solid white;
  height: 3vw;
  min-width: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 5vw;
    min-width: 5vw;
  }

  @media (max-width: 480px) {
    height: 8vw;
    min-width: 8vw;
  }
`;

interface HangmanWordProps {
  word: string;
  guessedLetters: string[];
  revelar: boolean;
}

export default function HangmanWord({
  revelar,
  word,
  guessedLetters,
}: HangmanWordProps) {
  return (
    <Wrapper>
      {word.split("").map((letter, index) => (
        <LetterWrapper key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || revelar ? "visible" : "hidden",
              color: !guessedLetters.includes(letter) ? "red" : "inherit",
            }}
          >
            {letter}
          </span>
        </LetterWrapper>
      ))}
    </Wrapper>
  );
}
