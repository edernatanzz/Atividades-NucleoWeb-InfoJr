import React, { useState } from 'react';

const PlayerForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="playerName">Nome do Jogador:</label>
      <input
        type="text"
        id="playerName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Iniciar Jogo</button>
    </form>
  );
};

export default PlayerForm;
