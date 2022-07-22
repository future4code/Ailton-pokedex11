import React, { Profiler } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../Router/coordinator'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import LinearProgress from "@mui/material/LinearProgress"


const CardDetalhes = styled.div`
display: flex;
border: 1px solid black;
width: 90%;
height: 80%;
justify-content: space-between;
`

const DivImgs = styled.div`
display: flex;
flex-direction: column;
`

const DivBaseStats = styled.div`
display: flex;
flex-direction: column;
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

export default function Details() {
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((res) => {
        console.log('Os detalhes:', res.data)
      setPokemon(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <Header/>
      <h1>Detalhes</h1>
      <CardDetalhes  key={pokemon.id}
      style={{
        backgroundColor: corBackGround(pokemon.types === undefined ? "" : pokemon.types[0].type.name),
        color: "white",
      }}>
      <DivImgs>
      <img src={pokemon.sprites === undefined ? "": pokemon.sprites.front_default}/>
      <img src={pokemon.sprites === undefined ? "": pokemon.sprites.back_default}/>

      </DivImgs>
      <DivBaseStats>
      <h4>Base States</h4>
    <p>{pokemon.stats === undefined ? "" : pokemon.stats[0].stat.name}: {pokemon.stats === undefined ? <p>carregando</p> : pokemon.stats[0].base_stat}</p>
    <LinearProgress variant="determinate"  value={pokemon.stats !== undefined ?pokemon.stats[0].base_stat:"" } />
    <p>{pokemon.stats === undefined ? "" : pokemon.stats[1].stat.name}: {pokemon.stats === undefined ? <p>carregando</p> : pokemon.stats[1].base_stat}</p>
    <LinearProgress variant="determinate"  value={pokemon.stats !== undefined ?pokemon.stats[1].base_stat:"" } />
    <p>{pokemon.stats === undefined ? "" : pokemon.stats[2].stat.name}: {pokemon.stats === undefined ? <p>carregando</p> : pokemon.stats[2].base_stat}</p>
    <LinearProgress variant="determinate"  value={pokemon.stats !== undefined ?pokemon.stats[2].base_stat:"" } />
    <p>{pokemon.stats === undefined ? "" : pokemon.stats[3].stat.name}: {pokemon.stats === undefined ? <p>carregando</p> : pokemon.stats[3].base_stat}</p>
    <LinearProgress variant="determinate"  value={pokemon.stats !== undefined ?pokemon.stats[3].base_stat:"" } />
    <p>{pokemon.stats === undefined ? "" : pokemon.stats[4].stat.name}: {pokemon.stats === undefined ? <p>carregando</p> : pokemon.stats[4].base_stat}</p>
    <LinearProgress variant="determinate"  value={pokemon.stats !== undefined ?pokemon.stats[4].base_stat:"" } />
    <p>{pokemon.stats === undefined ? "" : pokemon.stats[5].stat.name}: {pokemon.stats === undefined ? <p>carregando</p> : pokemon.stats[5].base_stat}</p>
    <LinearProgress variant="determinate"  value={pokemon.stats !== undefined ?pokemon.stats[5].base_stat:"" } />
    </DivBaseStats>

    <div>
    <p>#{pokemon.id}</p>
    <h4>
    {pokemon.name === undefined ?"" : pokemon.name[0].toUpperCase()}
    {pokemon.name === undefined ?"" :pokemon.name.slice(1)}
    </h4>
    <p>{pokemon.types === undefined ? "" : pokemon.types[0]?.type.name}</p>
    <p>{pokemon.types === undefined ? "" :pokemon.types[1]?.type.name}</p>
    <img
          alt={pokemon.name}
          src={pokemon.sprites === undefined? <p>carregando</p> : pokemon.sprites.other["official-artwork"].front_default}
          height={110}
          width={110}
        />

    </div>

    <div>
    <h4>Moves</h4>
    <p>{pokemon.moves === undefined ? "": pokemon.moves[0].move.name}</p>
    <p>{pokemon.moves === undefined ? "":pokemon.moves[1].move.name}</p>
    <p>{pokemon.moves === undefined ? "":pokemon.moves[2].move.name}</p>
    <p>{pokemon.moves === undefined ? "":pokemon.moves[4].move.name}</p>
    </div>
    
    </CardDetalhes>
      <button onClick={()=>goToHomePage(navigate)}>Home</button>
      </div>
  )
}
  