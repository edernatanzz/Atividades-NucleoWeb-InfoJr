/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Section1.css';

const Section1 = ({ darkMode }) => {
  return (
    <section className={`section1 ${darkMode ? 'dark-mode' : ''}`} id='section1'>
      <div className="section1-conteudo">
        <img src="/src/assets/img/img curriculo.PNG" alt="" />
        <h1>Hello.
          <br />
          My name is Eder Natan.
        </h1>
        <div className="espaco">
          <div className="hr"></div>
        </div>
        <div className="conteudo-p">
        <p>Tenho aproximadamente dois anos de experiência em programação e, atualmente, sou estudante do curso de <span>Ciência e Tecnologia na Universidade Federal da Bahia (UFBA)</span>. Minha paixão pela tecnologia me motiva a buscar constantemente novos conhecimentos e a aprimorar minhas habilidades nessa área. Acredito firmemente que aqueles que não lutam pelo futuro que desejam devem aceitar o futuro que vier, então estou sempre em busca de desafios e oportunidades para aplicar meus conhecimentos teóricos e práticos.</p>
          <div className="espaco-p"></div>
          <p>Tenho experiência com <span>Java e Python</span>, duas linguagens amplamente utilizadas na indústria. Em Java, trabalhei com – <span> Spring Boot e Orientação a Objetos </span>.Em Python, meu foco tem sido no desenvolvimento de aplicações web usando o framework <span>Django</span>,um pouco de machine learn em projetos pessoais , e ultimamente estou me aperfeiçoando em Web: <span>Html, css e Js</span> juntamente com seus frameworks.
</p>
          <div className="espaco-p"></div>
          <p>Além disso, tenho uma sólida presença no <span>GitHub e GitLab</span>, onde compartilho meus projetos.<span>No LinkedIn</span> mantenho um perfil ativo, compartilhando insights profissionais e meu progresso.</p>
          <div className="espaco-p"></div>
        </div>
        <div className="avaliable">
          <div className="avaliable-conteudo">
            <img
              src="/src/assets/img/check-circle-solid-light.svg"
              alt=""
            />

          <h2>Estou disponível para oportunidades de trabalho nestas áreas – <span>entre em contato</span>. Diga alô!</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
