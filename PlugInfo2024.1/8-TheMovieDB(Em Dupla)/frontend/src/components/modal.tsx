"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const customStyles = {
    content: {
    
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:1080/cadastro', { name, email, password });
      setMessage(response.data.message || 'Usuario cadastrado');
      setIsOpen(false); 
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Erro ao cadastrar usuário');
    }
  }

  return (
    <div>
      <button onClick={openModal}>Cadastrar</button>
      <Modal
        className="Black"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='Titulo'>
          <h2>Cadastro</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='Formulario'>
            <input
              placeholder='Nome'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='Botao'>
            <button type='submit'>Cadastrar</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </Modal>
    </div>
  );
}
