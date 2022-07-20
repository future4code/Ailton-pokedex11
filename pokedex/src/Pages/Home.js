import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { goToDetailsPage } from "../Router/coordinator";
import styled from "styled-components";
import Header from "../components/Header";

const Card = styled.div`
  border: 1px solid black;
  height: 210px;
  width: 440px;
`;

const corBackGround = (type) => {
  switch (type) {
    case "normal":
      return "lightblue";
    case "fighting":
      return "red";
    case "flying":
      return "lightblue";
    case "poison":
      return "purple";
    case "ground":
      return "brown";
    case "rock":
      return "brown";
    case "bug":
      return "green";
    case "ghost":
      return "purple";
    case "steel":
      return "grey";
    case "fire":
      return "red";
    case "water":
      return "blue";
    case "grass":
      return "green";
    case "electric":
      return "yellow";
    case "psychic":
      return "pink";
    case "ice":
      return "lightblue";
    case "dragon":
      return "purple";
    case "dark":
      return "purple";
    case "fairy":
      return "pink";
    default:
      return "black";
  }
};

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();
  const [pokeList, setPokelist] = useState([]);


  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30")
      .then((res) => {
        setPokelist(res.data.results);
      });
  };

  

  useEffect(() => {
    const listaPokemon = [];
    pokeList.map((poke) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then((res) => {
          listaPokemon.push(res.data);
          console.log(res.data)
          if (listaPokemon.length === 30) {
            setPokemon(listaPokemon);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [pokeList]);


  return (
    <div>
      <Header />
      {pokemon && pokemon.map((poke) => {
        return (
          <Card  key={poke.id}       style={{
            backgroundColor: corBackGround(poke.types[0].type.name),
            color:'white'
            }}>
           
            <strong>#{poke.id} {poke.name}  </strong>
            <div>
              <img alt={poke.name} src={poke.sprites.front_default} />
            </div>
            <strong>Tipo 1: {poke.types[0].type.name}</strong>
            <strong>Tipo 2: {poke.types[1] ? poke.types[1].type.name : "NÃO TEM OUTRO TIPO"}</strong>
            <button onClick={()=>navigate(`/${poke.id}`)}>Detalhes</button>
            <button>Adicionar na pokedex</button>
          </Card>
        );
      })}
    </div> 
  );
}