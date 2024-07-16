import React from 'react';
import './Section2.css';

const Section2 = ({ darkMode }) => {
  return (
    <section className={`section2 ${darkMode ? 'dark-mode' : ''}`} id='section2'>
      <div className="hr2"></div>
      <div className="espaco"></div>
      <div className="conteudo2">
        <h2>Mais Detalhes </h2>
        <p>Explore meus projetos mais recentes nas seções abaixo! Aqui você encontrará alguns dos meus trabalhos.</p>
      </div>

      <div className="conteudo2-2">
        <div className="conteudo2-colum1">
          <img src="/src/assets/img/OnBox.png" style={{ width: '100%' }} alt="" />
        </div>
        <div className="conteudo2-colum2">
          <div className="text">
            <h3>Onbox</h3>
            <p>ONBOX, feito para facilitar a organização de mercadorias e produtos de forma online, no qual o mesmo conta com o framework Spring Boot para hospedar e inicializar o backend do projeto.</p>
            <button>Saiba mais</button>
          </div>
        </div>
      </div>

      <div className="conteudo2-3">
        <div className="conteudo2-colum1">
          <img src="/src/assets/img/sistema_academico.png" style={{ width: '100%' }} alt="" />
        </div>
        <div className="conteudo2-colum2">
          <div className="text">
            <h3>Sistema Academico </h3>
            <p>Este sistema de ensino foi construído com o framework Django, reconhecido por sua eficiência e robustez. Aproveitando recursos como o ORM e o sistema de administração automática, o projeto simplifica a interação com o banco de dados e acelera a criação de interfaces administrativas.</p>
            <button>Saiba mais</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
