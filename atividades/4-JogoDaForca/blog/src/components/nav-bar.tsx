"use client";
import React from 'react';
import styled from 'styled-components';
import { Card1 } from './Card1';

interface NavBarProps {}

const NavBarContainer = styled.div`

    background-color: var(--green);
    width: 100%;
    height: 400px;
    top: 65px;
    display: flex;
    aling-itens:center;
    flex-direction: column;
`;


const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content:center;
    aling-itens:center;
    gap:120px;
`;

const NavItem = styled.li`
    margin-top: 20px;


    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: left;

`;

const NavLink = styled.a`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
   

    &:hover {
        text-decoration: underline;
        text-decoration-color:red;
        text-decoration-thickness: 3px;
`;



export function NavBar(props: NavBarProps) {
    return (
        <NavBarContainer>
            <NavList>
                <NavItem><NavLink href="#link1">Novidades</NavLink></NavItem>
                <NavItem><NavLink href="#link2">Jogos</NavLink></NavItem>
                <NavItem><NavLink href="#link3">Filmes</NavLink></NavItem>
                <NavItem><NavLink href="#link4">Series</NavLink></NavItem>
            </NavList>
            <Card1/>
        </NavBarContainer>
    );
}
