"use client";
import { LogoPadaria } from "@/assets/logo";
import React from "react";
import styled from "styled-components";

interface HeaderProps {}

const TagHeader = styled.header`
  width: 100%;
  height: 331px;
  background: var(--colorheader);
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const LogoContainer = styled.div`
  width: 119px; 
  height: 117px; 

`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <LogoContainer>
        <LogoPadaria />
      </LogoContainer>
    </TagHeader>
  );
}
