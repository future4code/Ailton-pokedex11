import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { goToDetailsPage } from "../Router/coordinator";
import styled from "styled-components";
import Header from "../components/Header";

const Card = styled.div`
  border: 1px solid black;
  height: 100px;
  width: 100px;
`;

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
          if (listaPokemon.length === 30) {
            setPokemon(listaPokemon);
            console.log("FUNCIONA, BIXO", listaPokemon);
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
      {pokemon.map((poke) => {
        return (
          <Card key={poke.id}>
           
            <p>#{poke.id} {poke.name} {poke.types[0].type.name} </p>
          </Card>
        );
      })}
    </div>
  );
}
