"use client";
import React from 'react';
import styled from 'styled-components';
import { Card1 } from './Card1';
import { KeyTextField } from '@prismicio/client';

interface NavBarProps {
title : KeyTextField;
  
}

const NavBarContainer = styled.div`
  background-color: var(--green);
  width: 100%;
  height: auto;
  top: 65px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 120px;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    gap: 40px; 
  }

  @media (max-width: 480px) {
    gap: 20px; 
  }
`;

const NavItem = styled.li`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const NavLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: red;
    text-decoration-thickness: 3px;
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
  }
`;

export function NavBar(props: NavBarProps) {
  return (
    <NavBarContainer>
      <NavList>
        <NavItem><NavLink href="#link1">Novidades</NavLink></NavItem>
        <NavItem><NavLink href="#link2">Jogos</NavLink></NavItem>
        <NavItem><NavLink href="#link3">Filmes</NavLink></NavItem>
        <NavItem><NavLink href="#link4">Séries</NavLink></NavItem>
      </NavList>
      <Card1 title={props.title} />
    </NavBarContainer>
  );
}
