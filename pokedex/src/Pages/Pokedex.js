import React, {useState,useEffect}from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

export default function Pokedex(props) {
  const [listaPokemon, setListaPokemon] = useState([])

  const Card = styled.div`
  border: 1px solid black;
  height: 210px;
  width: 440px;
  border-radius: 12px;
  margin-bottom: 6px;

`;

const Main = styled.main`
  width: 100%;
  margin-top: 6px;
  margin-left: 5px;
  display: grid;
  gap:10px;
  grid-template-columns: repeat(3,1fr);
`;

const NomeCard = styled.div`
  font-family: "Tahoma";
  display: flex;
  flex-direction: column;

  font-size: medium;
  padding-left: 10px;
`;
const DivImagem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  
`;
const DivTipos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 8px;
  gap: 17px;
  p {
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
  }
`;

  const corBackGround = (type) => {
    switch (type) {
      case "normal":
        return "#BF9762";
      case "fighting":
        return "#CE4069";
      case "flying":
        return "#6892B0";
      case "poison":
        return "#AD61AE";
      case "ground":
        return "#D97745";
      case "rock":
        return "#C7B78B";
      case "bug":
        return "#76A866";
      case "ghost":
        return "#5269AC";
      case "steel":
        return "#BBBBBB";
      case "fire":
        return "#EAAB7D";
      case "water":
        return "#71C3FF";
      case "grass":
        return "#729F92";
      case "electric":
        return "#F4D23B";
      case "psychic":
        return "#F67176";
      case "ice":
        return "#74CEC0";
      case "dragon":
        return "#0A6CBF";
      case "dark":
        return "#5C5365";
      case "fairy":
        return "#EC8FE6";
      default:
        return "black";
    }
  };

  const removerDaPokedex= (pokemon) => {
    const NovaPokedex = props.pokedex.filter((p) => p.name !== pokemon.name);
    props.setPokedex(NovaPokedex);
    const NovaListaPokemon = [...listaPokemon, pokemon];
    setListaPokemon(NovaListaPokemon);
  };

  const pokedexlist = props.pokedex && props.pokedex?.map((poke)=>{

    return <Card
    key={poke.id}
    style={{
      backgroundColor: corBackGround(poke.types[0].type.name),
    }}> 
      <NomeCard>
          <p>
          <strong>#{poke.id}</strong>
        </p>
        <p>{poke.name[0].toUpperCase()}
        {poke.name.slice(1)}
        </p>
        </NomeCard>
        <DivImagem>
        <img
          alt={poke.name}
          src={poke.sprites.other["official-artwork"].front_default}
          height={110}
          width={110}
        />
        </DivImagem>
        <DivTipos>
             <p>{poke.types[0].type.name}</p>
        <p>{poke.types[1]?.type.name}</p>
        </DivTipos>
    <button onClick={()=>removerDaPokedex(poke)}>Remomer</button>
    </Card>
    
  })

  return (
    <div>
      <Header/>
      <h1>Pokedex</h1>
      <Main>
      {pokedexlist}
      
      </Main>
    
      
      </div>
  )
}
