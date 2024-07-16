import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { SearchIcon } from "./search-icon";

export const Search = styled.input`
  width: 100%;
  max-width: 360px;
  border-radius: 20px;
  border: none;
  padding: 10px 16px;
  background-color: var(--search-color);
  font-family: inherit;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 352px;
  
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    svg {
      right: 10px;
    }
  }

  @media (max-width: 480px) {
    svg {
      right: 5px;
    }
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <Search {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
