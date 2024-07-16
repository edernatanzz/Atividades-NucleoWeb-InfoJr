'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components2/header';
import MovieList from '@/components/movieList';
import { FavoritesProvider } from '../favoritos/components3/favoriteComponent';

interface User {
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          throw new Error('Token JWT não encontrado.');
        }

        const response = await axios.get<User>('http://localhost:1080/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        setLoading(false);
      }
    };

    fetchUser(); 
  }, []);

  if (loading) {
    return <p>Carregando...</p>; 
  }

  return (
    <>

      <Header user={user} />
      <div>
        <h1>Página Inicial!</h1>
        <FavoritesProvider> 
        <MovieList />
        </FavoritesProvider>
      </div>
    </>
  );
};

export default Home;
