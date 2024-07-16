import React, { createContext, useState, ReactNode, useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

const Favorites = styled.div`
  padding-top: 88px;
`;

interface FavoriteItem {
  id: number;
  title: string;
  
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (item: FavoriteItem) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
FavoritesContext.displayName = "MyFavorites";

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const addFavorite = (newFavorite: FavoriteItem) => {
    const repeatedFavorite = favorites.some((item) => item.id === newFavorite.id);

    if (!repeatedFavorite) {
      setFavorites([...favorites, newFavorite]);
    } else {
      // Se já existe, pode remover da lista de favoritos (simulação de troca de estado)
      setFavorites(favorites.filter((fav) => fav.id !== newFavorite.id));
    }
  };

  const removeFavorite = (favoriteToRemove: FavoriteItem) => {
    setFavorites(favorites.filter((item) => item.id !== favoriteToRemove.id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavoriteContext must be used within a FavoritesProvider");
  }
  return context;
}
