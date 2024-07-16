import React, { createContext, useContext, useState, ReactNode } from 'react'; // Importe ReactNode para tipar children
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface FavoriteContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movie: Movie) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

const API_BASE_URL = 'http://localhost:1080/home'; 

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavoriteContext must be used within a FavoriteProvider');
  }
  return context;
};

interface FavoriteProviderProps {
  children: ReactNode; 
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = async (movie: Movie) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.post(`${API_BASE_URL}/favoritos`, { movieId: movie.id }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Filme favoritado:', response.data);
      
      setFavorites([...favorites, movie]);
    } catch (error) {
      console.error('Erro ao favoritar filme:', error);
      
    }
  };

  const removeFavorite = async (movie: Movie) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.delete(`${API_BASE_URL}/favoritos/${movie.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Filme removido dos favoritos:', response.data);
     
      setFavorites(favorites.filter(fav => fav.id !== movie.id));
    } catch (error) {
      console.error('Erro ao remover filme dos favoritos:', error);
      
    }
  };

  const contextValue: FavoriteContextType = {
    favorites,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
