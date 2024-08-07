import React, { useRef, RefObject } from 'react';
import styled from 'styled-components';
import { Battons, Olhos, Pincel, SkinCare, Sombrancelha, Unhas } from '../assets/imgs';
import { createClient } from '@/prismicio';

const Container = styled.div`
  width: 100%;
  height: 300px;
`;

const Title = styled.h1`
  text-align: start;
  margin-bottom: 20px;
`;

const Content = styled.div`
  padding: 30px 160px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  gap: 30px;
  padding: 0;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
`;

const ItemText = styled.span`
  margin-top: 10px;
  text-align: center;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 0 auto;
  margin-right: 0 auto;
  padding: 5px 5px;

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    display: ;
  }
`;

const AjustImgContainer = styled.div`
  .ajustimg img {
    width: 100%;
    height: auto;
    max-width: 100vw;
  }
`;

export function Categorias() {

  const itemsRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollLeft = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <Content>
        <Title>Nossas Categorias</Title>
        <div className="ajustimg">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ArrowButton onClick={scrollLeft}>{'<'}</ArrowButton>
            <Items ref={itemsRef}>
              <Item>
                <AjustImgContainer>
                  <div className='imgcategory'> 
                    
                  <Battons />
                  </div>
                </AjustImgContainer>
                <ItemText>Batom</ItemText>
              </Item>
              <Item>
                <AjustImgContainer>
                <div className='imgcategory'> 
                  <Olhos />
                  </div>
                </AjustImgContainer>
                <ItemText>Olhos</ItemText>
              </Item>
              <Item>
                <AjustImgContainer>
                <div className='imgcategory'> 
                  <Pincel />
                  </div>
                </AjustImgContainer>
                <ItemText>Pinceis</ItemText>
              </Item>
              <Item>
                <AjustImgContainer>
                <div className='imgcategory'> 
                  <SkinCare />
                  </div>
                </AjustImgContainer>
                <ItemText>Cuidados com a Pele</ItemText>
              </Item>
              <Item>
                <AjustImgContainer>
                <div className='imgcategory'> 
                  <Sombrancelha />
                  </div>
                </AjustImgContainer>
                <ItemText>Sobrancelha</ItemText>
              </Item>
              <Item>
                <AjustImgContainer>
                <div className='imgcategory'> 
                  <Unhas />
                  </div>
                </AjustImgContainer>
                <ItemText>Unhas</ItemText>
              </Item>
            </Items>
            <ArrowButton onClick={scrollRight}>{'>'}</ArrowButton>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Categorias;
