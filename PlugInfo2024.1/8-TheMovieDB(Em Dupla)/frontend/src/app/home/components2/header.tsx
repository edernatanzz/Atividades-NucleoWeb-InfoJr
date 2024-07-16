import React, { useState } from 'react';
import Netflix from '../../../../img/netflix.jpg';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Modal from '@/components/modalFav'; 

interface HeaderProps {
  user: {
    name: string;
    email: string;
  } | null;
}

const Tagheader = styled.header`
  font-size: 20px;
  position: sticky;
  top: 0;
  height: auto;
  min-height: 70px;
  z-index: 1;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-family: inherit;
  color: #fff;

  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav li {
    margin-right: 20px;
  }

  nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: #e50914;
  }

  .user-icon {
    margin-right: 5px;
  }

  .search-container {
    display: flex;
    align-items: center;
    background-color: #333;
    padding: 5px;
    border-radius: 5px;
    margin-left: 10px;
  }

  .search-input {
    border: none;
    background: none;
    color: #fff;
    font-size: 16px;
    margin-left: 5px;
    width: 150px;
    outline: none;
  }

  .search-input::placeholder {
    color: #ccc;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

const UserName = styled.p`
  margin: 0 10px;
  cursor: pointer;
`;

const Options = styled.div`
  cursor: pointer;
  text-align: center;

  ${Tagheader}:hover & {
    display: block;
    color: red;
  }
`;

const SearchResultContainer = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const SearchResultItem = styled.div`
  color: #fff;
  cursor: pointer;
  padding: 5px 0;

  &:hover {
    background-color: #555;
  }
`;

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false); // Estado para controlar a exibição do modal

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    window.location.href = '/home';
    window.location.reload();
  };

  const handleLogin = () => {
    window.location.href = '/';
  };

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: 'ad1c12884f4a7421c3d9e6d859be97a9',
          query: query,
        },
      });

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      setSearchResults([]);
    }
  };

  const handleFavoritesClick = () => {
    setShowFavoritesModal(true);
  };

  const handleCloseModal = () => {
    setShowFavoritesModal(false);
  };

  return (
    <Tagheader>
      <Image src={Netflix} alt="Netflix Logo" width={100} height={50} />
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/">Series</a></li>
          <li><a href="/">Filmes</a></li>
          <li>
            <button onClick={handleFavoritesClick}>Meus Favoritos</button>
          </li>
        </ul>
      </nav>
      <UserContainer>
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} style={{ cursor: 'pointer' }} />
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {user ? (
          <>
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <UserName>{user.name}</UserName>
            <Options>
              <p onClick={handleLogout}>Logout</p>
            </Options>
          </>
        ) : (
          <p onClick={handleLogin}>Fazer Login <FontAwesomeIcon icon={faUser} className="user-icon" /></p>
        )}
      </UserContainer>

      {searchResults.length > 0 && (
        <SearchResultContainer>
          {searchResults.map((movie) => (
            <SearchResultItem key={movie.id}>
              <h3>{movie.title}</h3>
            </SearchResultItem>
          ))}
        </SearchResultContainer>
      )}

      {showFavoritesModal && <Modal onClose={handleCloseModal} />}
    </Tagheader>
  );
};

export default Header;
