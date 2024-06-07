"use client";
import { Span } from "next/dist/trace";
import { Montserrat } from "next/font/google";
import React from "react";
import styled from "styled-components";
import { PrimaryInputSearchIcon, Search } from "./search";

interface HeaderProps {}


const montserrat = Montserrat ({ 
  weight: ['800'],
  subsets: ["latin"] 
});
 
const TagHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 160px;
  background-color: var(--header-color);
  
  `;

const Logo = styled.a`
    text-decoration:none; 
    color: var(--logo-color1);
    font-size: 36px;
    
    line-height: 54px;
    letter-spacing: -0.02em;
    text-align: left;

    span{
      color:white;
      font-family: Montserrat;
      font-size: 36px;
      font-weight: 400;
      line-height: 54px;
      letter-spacing: -0.02em;
      text-align: left;
    }


`;



export function Header(props: HeaderProps) {
  return (
    <TagHeader>
       <Logo className={montserrat.className} >Game<span>Network</span></Logo>
      <div>
      <PrimaryInputSearchIcon placeholder="Procurando por algo especifico ?" />
      </div>
    </TagHeader>
  );
}
