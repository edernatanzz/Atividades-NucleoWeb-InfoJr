import Image from "next/image"
import styled from "styled-components"

const Imagem = styled.div`
 width: 100px;
  height: 200px;
`
const Geral = styled.div`
display: flex;
justify-content: space-around;
`

const Informacao = styled.div`

`

export default function About(){
    return(
        <>
        <Geral>
        <Imagem></Imagem>
        <Informacao>
            <h1>TITULO</h1>
            <p>Informação sobreo filme</p>
        </Informacao>
        </Geral>
        </>
    )
}