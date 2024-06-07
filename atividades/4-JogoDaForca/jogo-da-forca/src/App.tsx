import './App.css';
import HangmanDrawing from './components/hangman-drawing';
import Keyboard from './components/keyboard';
import HangmanWord from './components/hangmanword';
import Message from './components/win-lose';
import Placar from './components/placar';
import PlayerForm from './components/forms'; 
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    margin-left: -60px ;
  }
`;

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 375px;
`;

const words = ['python', 'java', 'javascript'];

function App() {
  const [playerName, setPlayerName] = useState(''); // Adicione o estado do nome do jogador
  const [wordToGuess, setWordToGuess] = useState(() => words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const addGuessedLetter = useCallback((letter: string) => {
    if (!guessedLetters.includes(letter) && gameStatus === 'playing') {
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    }
  }, [guessedLetters, gameStatus]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [addGuessedLetter]);

  const incorrectGuesses = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
  const correctGuesses = guessedLetters.filter((letter) => wordToGuess.includes(letter));

  const derrota = incorrectGuesses.length >= 6;
  const vitoria = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));

  useEffect(() => {
    if (derrota) {
      setGameStatus('lost');
      setShowMessage(true);
      setLosses((prevLosses) => prevLosses += 1);
    } else if (vitoria) {
      setGameStatus('won');
      setShowMessage(true);
      setWins((prevWins) => prevWins += 1);
    }
  }, [derrota, vitoria]);

  const resetGame = () => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setGameStatus('playing');
    setShowMessage(false);
  };

  const handleStartGame = (name: string) => {
    setPlayerName(name);
  };

  return (
    <Wrapper>
      {!playerName && <PlayerForm onSubmit={handleStartGame} />} {/* Adicione o formulário do jogador */}
      {showMessage && (
        <Message onClose={resetGame}>
          {vitoria ? (
            <>
              <h2 style={{ color: 'black' }}>Você venceu!</h2>
              <p>Parabéns! Você acertou a palavra.</p>
            </>
          ) : (
            <>
              <h2>Você perdeu!</h2>
              <p>Infelizmente não foi dessa vez. Tente novamente.</p>
            </>
          )}
        </Message>
      )}

      {playerName && (
        <HangmanPart className='div-boneco'>
          <Placar vitórias={wins} derrotas={losses} />
          <h2>Jogo da Forca <br />
           Usuario = {playerName}
          </h2>
          
          <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
          <HangmanWord revelar={derrota} guessedLetters={guessedLetters} word={wordToGuess} />
        </HangmanPart>
      )}
      {playerName && <Keyboard letrasAtivas={correctGuesses} disabled={vitoria || derrota} letrasInativas={incorrectGuesses} addGuessedLetter={addGuessedLetter} />}
    </Wrapper>
  );
}

export default App;
