import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
display: flex;
border: 1px solid black;
width: 100%;
height: 15vh;

`

export default function Header() {
  return (
    <Head>
        <h1>Header</h1>
    <button>Voltar </button>
    </Head>
  )
}
