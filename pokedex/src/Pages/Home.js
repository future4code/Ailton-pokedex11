import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { goToDetailsPage } from "../Router/coordinator";
import styled from "styled-components";
import Header from "../components/Header";
import { createGlobalStyle } from "styled-components";
import PokeCard from "./PokeCard";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  };
  `;

const Main = styled.main`
  width: 100%;
  margin-top: 6px;
  margin-left: 5px;
`;

export default function Home(props) {
  const [pokemon, setPokemon] = useState([]);
  const [pokeList, setPokelist] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {

    const allPokemons = Array.from({ length: 30 }, (_, index) => ++index)
    .map(async (poke) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);

      return res.data
    });
    const finalArray = await Promise.all(allPokemons)
    setPokemon(finalArray)
  };
console.log("O que tá rolando?", pokemon)
  // useEffect(() => {
  //   const listaPokemon = [];
  //   pokeList.map((poke) => {
  //     axios
  //       .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
  //       .then((res) => {
  //         listaPokemon.push(res.data);
  //         console.log(res.data);
  //         if (listaPokemon.length === 30) {
  //           setPokemon(listaPokemon);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // }, [pokeList]);

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Main>
        {pokemon &&
          pokemon.map((poke) => {
            return <PokeCard poke={poke} setPokedex={props.setPokedex} />;
          })}
      </Main>
    </div>
  );
}
