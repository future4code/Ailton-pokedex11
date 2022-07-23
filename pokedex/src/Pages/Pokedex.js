import React, {useState,useEffect}from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import HeaderPokedex from '../components/HeaderPokedex';
import bug from '../imgs/Bug.png'
import dark from '../imgs/Dark.png'
import dragon from '../imgs/Dragon.png'
import electric from '../imgs/Electric.png'
import fairy from '../imgs/Fairy.png'
import fighting from '../imgs/Fighting.png'
import fire from '../imgs/Fire.png'
import flying from '../imgs/Flying.png'
import grass from '../imgs/Grass.png'
import ground from '../imgs/Ground.png'
import normal from '../imgs/Normal.png'
import poison from '../imgs/Poison.png'
import psychic from '../imgs/Psychic.png'
import rock from '../imgs/Rock.png'
import steel from '../imgs/Steel.png'
import water from '../imgs/Water.png'
import ghost from '../imgs/Ghost.png'
import ice from '../imgs/Ice.png'

export default function Pokedex(props) {
  const [listaPokemon, setListaPokemon] = useState([])


  const Main = styled.main`
  width: 100%;
  margin-top: 6px;
  margin-left: 5px;
  display: grid;
  gap:10px;
  grid-template-columns: repeat(3,1fr);
`;


const Card = styled.div`
  border: 1px solid black;
  height: 36vh;
  width: 420px;
  border-radius: 12px;
  margin-bottom: 6px;
`

const NomeCard = styled.p`
    font-family: 'Tahoma';
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    /* gap: 20px; */
    font-size: 20px;
    padding-left: 10px;
    position: absolute;
    margin-top: 50px;
    
`
const NumeroCard = styled.p`
  font-family: 'Tahoma';
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    /* gap: 20px; */
    font-size: 22px;
    padding-left: 10px;
    position: absolute;
  
`

const DivImagem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
`
const DivTipos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 8px;
  gap: 17px;
  position: absolute;

  p {
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
  }
`
const DivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  margin-right: 5px;
  align-items: center;
 
`
const DivBotão = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 5px;
  justify-content: space-between;
  margin-top: 85px;
  margin-right: 5px;
`

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
      <div>
          <NumeroCard>
          <strong>#{poke.id}</strong>
        </NumeroCard>
        <NomeCard>{poke.name[0].toUpperCase()}
        {poke.name.slice(1)}
        </NomeCard>
        </div>
        <DivImagem>
        <img
          alt={poke.name}
          src={poke.sprites.other["official-artwork"].front_default}
          height={110}
          width={110}
        />
        </DivImagem>
        <DivInfo>
        <DivTipos>
        <p>{poke.types && poke.types.map((tipo)=>{
      switch (tipo.type.name) {
        case 'normal':
          return <img src={normal}/>
        case 'fighting':
          return <img src={fighting}/>
        case 'flying':
          return <img src={flying}/>
        case 'poison':
          return <img src={poison}/>
        case 'ground':
          return <img src={ground}/>
        case 'rock':
          return <img src={rock}/>
        case 'bug':
          return <img src={bug}/>
        case 'ghost':
          return <img src={ghost}/>
        case 'steel':
          return <img src={steel}/>
        case 'fire':
          return <img src={fire}/>
        case 'water':
          return <img src={water}/>
        case 'grass':
          return <img src={grass}/>
        case 'electric':
          return <img src={electric}/>
        case 'psychic':
          return <img src={psychic}/>
        case 'ice':
          return <img src={ice}/>
        case 'dragon':
          return <img src={dragon}/>
        case 'dark':
          return <img src={dark}/>
        case 'fairy':
          return <img src={fairy}/>
        default:
          return 'black'
      }

    })}</p>
        </DivTipos>
        </DivInfo>
        <DivBotão>
    <button onClick={()=>removerDaPokedex(poke)}>Remover</button>
    </DivBotão>
    </Card>
    
  })

  return (
    <div>
      <HeaderPokedex/>
      <h1>Pokedex</h1>
      <Main>
      {pokedexlist}
      </Main>
    
      
      </div>
  )
}
