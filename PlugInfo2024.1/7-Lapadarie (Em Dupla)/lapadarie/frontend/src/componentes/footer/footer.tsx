import styled from "styled-components"

interface FooterProps{}


const Footerstyled  =styled.footer`
display:flex;
justify-content:center;
height: 100px;


font-family: inherit;
font-size: 14px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0.20000000298023224px;
text-align: center;

color:var(--colorEntrada);

`
export function Footer( props:FooterProps ){
    return (
        <Footerstyled>Com 💛 Eder Natan 2024</Footerstyled>
    )
}