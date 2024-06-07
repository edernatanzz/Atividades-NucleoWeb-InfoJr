"use client";
import { Span } from "next/dist/trace";
import { Montserrat } from "next/font/google";
import React from "react";
import styled from "styled-components";
import { PrimaryInputSearchIcon, Search } from "./search";

interface HeaderProps {}

const montserrat = Montserrat({
  weight: ["800"],
  subsets: ["latin"]
});

const TagHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 160px;
  background-color: var(--header-color);

  @media (max-width: 1200px) {
    padding: 20px 80px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 20px 20px;
  }
`;

const Logo = styled.a`
  text-decoration: none;
  color: var(--logo-color1);
  font-size: 36px;
  line-height: 54px;
  letter-spacing: -0.02em;
  text-align: left;

  span {
    color: white;
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 400;
    line-height: 54px;
    letter-spacing: -0.02em;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 42px;

    span {
      font-size: 28px;
      line-height: 42px;
    }
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 36px;

    span {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

const SearchWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;



export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={montserrat.className}>
        Game<span>Network</span>
      </Logo>
      <SearchWrapper>
        <PrimaryInputSearchIcon placeholder="Procurando por algo especifico ?" />
      </SearchWrapper>
    </TagHeader>
  );
}
