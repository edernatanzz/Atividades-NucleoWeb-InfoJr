import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface ModalFormsProps {
    isOpen: boolean;
    children?: React.ReactNode;
    setModalOpen: (isOpen: boolean) => void;
}

const JanelaForms = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: var(--colorbackgroundclaro);
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const JanelaConteudo = styled.div`
    width: 605px; 
    height: 347px;
    background: white;
    padding: 2rem;
    position: fixed;
    gap: 40px;

    @media screen and (max-width: 768px) {
        width: 90vw;
        height: auto;
        max-height: 90vh; 
        padding: 1rem;
    }
`;

const Title = styled.h1`
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
`;

const Forms = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: flex-start;
`;

const FormularioContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const FormularioInput = styled.input`
    width: 545px;
    height: 50px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 5px 5px 5px;
    @media screen and (max-width: 768px) {
        width: 80vw;
    }
`;

const BotaoBase = styled.button`
    width: 545px;
    height: 60px;
    border: 1px solid #000;
    border-radius: 4px 4px 4px 4px ;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
`;

const FormularioBotao = styled(BotaoBase)`
    background-color:var(--colorEntrada) ;
    color: white;

    &:hover {
        background-color: var(--colorheader);
    }
`;

const FormularioBotaoCancelar = styled(BotaoBase)`
    background: none;
    color: var(--colorBordForms);
    border-color: var(--colorBordForms); 

    &:hover {
        background-color: #f0f0f0;
    }
`;

const Buttons = styled.form`
    display: flex;
    flex-direction: row;
    gap: 10px; 
    margin-top: 50px; 
`;

export function ModalForms({ isOpen, setModalOpen , children }: ModalFormsProps) {
    const [nome, setNome] = useState('');
    const [totalPaes, setTotalPaes] = useState('');

    const onChangeNome = (evt: ChangeEvent<HTMLInputElement>) => {
        setNome(evt.target.value);
    };

    const onChangeTotalPaes = (evt: ChangeEvent<HTMLInputElement>) => {
        setTotalPaes(evt.target.value);
    };

    const SendPedido = async (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();

        const pedidoData = {
            nome: nome,
            totalPaes: parseInt(totalPaes),
        };

        try {
            const response = await fetch('http://localhost:1080/createFila', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pedidoData),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar pedido');
            }

            setModalOpen(false);
        } catch (error) {
            console.error('Erro ao enviar pedido:', error);
        }
    };

    if (isOpen) {
        return (
            <JanelaForms>
                <JanelaConteudo>
                    <Forms>
                        <Title>Adicionar pessoas a fila</Title>
                        <FormularioContainer>
                            <FormularioInput 
                                type="text" 
                                name='nome' 
                                value={nome} 
                                onChange={onChangeNome}
                                placeholder="Nome completo do cliente" 
                            />
                            <FormularioInput 
                                type="text" 
                                name='totalPaes' 
                                value={totalPaes} 
                                onChange={onChangeTotalPaes}
                                placeholder="Total de pães :" 
                            />
                        </FormularioContainer>
                    </Forms>
                    <Buttons>
                        <FormularioBotao onClick={SendPedido}>Enviar</FormularioBotao>
                        {children}
                        <FormularioBotaoCancelar type="button" onClick={() => setModalOpen(false)}>Cancelar</FormularioBotaoCancelar>
                    </Buttons>
                </JanelaConteudo>
            </JanelaForms>
        );
    }

    return null;
}
