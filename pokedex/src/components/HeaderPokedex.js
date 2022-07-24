import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { goToPokedex } from '../Router/coordinator'
import Titulo from '../components/poketitulo.png'
import { createGlobalStyle } from 'styled-components'
import { goToHomePage } from '../Router/coordinator'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
  };
  `
const Head = styled.div`
    height: 18vh;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dotted black;
    padding-right: 15px;
    padding-left: 540px;
`
const BotaoHeader = styled.button`
    background: #33A4F5;
    border-radius: 8px;
    border: none;
    width: 160px;
    height: 40px;
    font-family: 'Tahoma';
    color: white;
    font-size: large;
`
export default function HeaderPokedex() {
    const navigate = useNavigate()
    return (
        <div>
            <GlobalStyle></GlobalStyle>
            <Head>
                <img src={Titulo} width={250} />
                <BotaoHeader onClick={() => goToHomePage(navigate)}> Home </BotaoHeader>
            </Head>
        </div>
    )
}