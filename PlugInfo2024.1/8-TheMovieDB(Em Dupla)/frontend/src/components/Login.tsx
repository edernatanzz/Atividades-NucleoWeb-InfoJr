"use client"
import React, { useState } from "react";
import Netflix from "../../img/netflix.jpg";
import Image from "next/image";
import Modall from "./modal";
import axios from "axios";

export default function Header() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:1080/login', { email, password });
      setMessage('Login realizado com sucesso!');
      localStorage.setItem('jwtToken', response.data.token);
      window.location.href = "../home"; // Redirecionar para a página principal 
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Erro ao realizar login');
    }
  };

  return (
    <>
      <div className="logoNetflix">
        <Image src={Netflix} alt="Logo Netflix" />
      </div>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <h3>Email</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3>Senha</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="inferior">
            <div className="Botao1">
              <button type="submit">Login</button>
            </div>
            <div className="Botao1">
              <Modall />
            </div>
          </div>
        </form>
        {message && <p className="message">{message}</p>}
      </div>

      <style jsx>{`
        .logoNetflix {
          text-align: center;
          margin-bottom: 20px;
        }
        .login {
          text-align: center;
          margin: 0 auto;
          width: 300px;
        }
        .login h2, .login h3 {
          margin: 10px 0;
        }
        .login input {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          box-sizing: border-box;
        }
        .inferior {
          display: flex;
          justify-content: space-between;
        }
        .Botao1 {
          width: 48%;
        }
        .Botao1 button {
          width: 100%;
          padding: 10px;
          background-color: #e50914;
          color: white;
          border: none;
          cursor: pointer;
        }
        .Botao1 button:hover {
          background-color: #f40612;
        }
        .message {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
