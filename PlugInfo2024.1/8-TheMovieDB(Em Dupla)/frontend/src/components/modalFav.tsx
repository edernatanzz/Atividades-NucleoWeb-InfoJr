import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 100;
  max-width: 500px;
  width: 100%;
  font-family: 'Arial Black', sans-serif;
`;

const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MovieItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const MovieTitle = styled.h3`
  margin-left: 10px;
  font-size: 1.2rem;
  color: #333;
`;

const MovieImage = styled.img`
  width: 50px;
  height: auto;
  border-radius: 8px;
`;

const RemoveButton = styled.button`
  background-color: #ff3333;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6666;
  }
`;

const ModalTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: #333;
  font-family: 'Arial Black', sans-serif;
`;

const Paragraph = styled.p`
  color: #333;
  font-family: 'Arial Black', sans-serif;
`;

const CloseButton = styled.button`
  background-color: #ff3333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6666;
  }
`;

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface ModalProps {
  onClose: () => void;
  userId: number;
}

const Modal: React.FC<ModalProps> = ({ onClose, userId }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          console.error('Token JWT não encontrado.');
          return;
        }

        const response = await axios.get<Movie[]>(`http://localhost:1080/favoritos?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFavoriteMovies(response.data);
      } catch (error) {
        console.error('Erro ao buscar filmes favoritos:', error);
      }
    };

    fetchFavoriteMovies();
  }, [userId]);

  const handleRemoveFavorite = async (movieId: number) => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        console.error('Token JWT não encontrado.');
        return;
      }

      await axios.delete(`http://localhost:1080/favoritos/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFavoriteMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
      console.log('Filme removido dos favoritos');
    } catch (error) {
      console.error('Erro ao remover filme dos favoritos:', error);
    }
  };

  return (
    <ModalContainer>
      <ModalTitle>Meus Favoritos</ModalTitle>
      {favoriteMovies.length > 0 ? (
        <MovieList>
          {favoriteMovies.map((movie) => (
            <MovieItem key={movie.id}>
              <MovieImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <MovieTitle>{movie.title}</MovieTitle>
              <RemoveButton onClick={() => handleRemoveFavorite(movie.id)}>Remover</RemoveButton>
            </MovieItem>
          ))}
        </MovieList>
      ) : (
        <Paragraph>Nenhum filme na sua lista de favoritos.</Paragraph>
      )}
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </ModalContainer>
  );
};

export default Modal;
