import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { goToPokedex } from '../Router/coordinator'

const Head = styled.div`
display: flex;
border: 1px solid black;
width: 100%;
height: 15vh;

`

export default function Header() {
  const navigate = useNavigate()
  return (
    <Head>
        <h1>Header</h1>
    <button onClick={()=>goToPokedex(navigate)}>Pokedex </button>
    </Head>
  )
}
