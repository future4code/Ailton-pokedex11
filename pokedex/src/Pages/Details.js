import React, { Profiler } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import LinearProgress from "@mui/material/LinearProgress";

const CardDetalhes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 18px;
  margin-left: 10%;
  width: 80vw;
  padding-right: 10px;
  padding-bottom: 15px;
`;

const DivImgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px dashed #729f92;
  margin-top: 5px;
  border-radius: 6px;
  margin-left: 8px;
  height: fit-content;
`;
const DivInfos = styled.div`
  height: 30vh;
`
const DivMoves = styled.div`
  display: grid;
  grid-column: initial;
  background-color: white;
  border-radius: 6px;
  color: black;
  width: 160px;
  height: 35vh;
  a {
    border: 1px dashed #bcbcbc;
    display: block;
    block-size: 0.6cm;
    background-color: #eeeeee;
    border-radius: 10px;
    width: 120px;
    margin-left: 20px;
  }
`;
const DivBaseStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default function Details() {
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((res) => {
        console.log("Os detalhes:", res.data);
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div>
          <h2>DETALHES</h2>
        </div>
        <CardDetalhes
          key={pokemon.id}
          style={{
            backgroundColor: corBackGround(
              pokemon.types === undefined ? "" : pokemon.types[0].type.name
            ),
            color: "white",
          }}
        >
          <DivImgs>
            <img
              src={
                pokemon.sprites === undefined
                  ? ""
                  : pokemon.sprites.front_default
              }
              height={130}
              width={130}
            />
          </DivImgs>
          <DivImgs>
            <img
              src={
                pokemon.sprites === undefined
                  ? ""
                  : pokemon.sprites.back_default
              }
              height={130}
              width={130}
            />
          </DivImgs>
          <DivBaseStats>
            <h3>Base States</h3>
            <p>
              {pokemon.stats === undefined ? "" : pokemon.stats[0].stat.name}:{" "}
              {pokemon.stats === undefined ? (
                <p>carregando</p>
              ) : (
                pokemon.stats[0].base_stat
              )}
            </p>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.stats !== undefined ? pokemon.stats[0].base_stat : ""
              }
            />
            <p>
              {pokemon.stats === undefined ? "" : pokemon.stats[1].stat.name}:{" "}
              {pokemon.stats === undefined ? (
                <p>carregando</p>
              ) : (
                pokemon.stats[1].base_stat
              )}
            </p>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.stats !== undefined ? pokemon.stats[1].base_stat : ""
              }
            />
            <p>
              {pokemon.stats === undefined ? "" : pokemon.stats[2].stat.name}:{" "}
              {pokemon.stats === undefined ? (
                <p>carregando</p>
              ) : (
                pokemon.stats[2].base_stat
              )}
            </p>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.stats !== undefined ? pokemon.stats[2].base_stat : ""
              }
            />
            <p>
              {pokemon.stats === undefined ? "" : pokemon.stats[3].stat.name}:{" "}
              {pokemon.stats === undefined ? (
                <p>carregando</p>
              ) : (
                pokemon.stats[3].base_stat
              )}
            </p>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.stats !== undefined ? pokemon.stats[3].base_stat : ""
              }
            />
            <p>
              {pokemon.stats === undefined ? "" : pokemon.stats[4].stat.name}:{" "}
              {pokemon.stats === undefined ? (
                <p>carregando</p>
              ) : (
                pokemon.stats[4].base_stat
              )}
            </p>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.stats !== undefined ? pokemon.stats[4].base_stat : ""
              }
            />
            <p>
              {pokemon.stats === undefined ? "" : pokemon.stats[5].stat.name}:{" "}
              {pokemon.stats === undefined ? (
                <p>carregando</p>
              ) : (
                pokemon.stats[5].base_stat
              )}
            </p>
            <LinearProgress
              variant="determinate"
              value={
                pokemon.stats !== undefined ? pokemon.stats[5].base_stat : ""
              }
            />
          </DivBaseStats>

          <DivInfos>
            <p>#{pokemon.id}</p>
            <h3>
              {pokemon.name === undefined ? "" : pokemon.name[0].toUpperCase()}
              {pokemon.name === undefined ? "" : pokemon.name.slice(1)}
            </h3>
            <p>
              {pokemon.types === undefined ? "" : pokemon.types[0]?.type.name}
            </p>
            <p>
              {pokemon.types === undefined ? "" : pokemon.types[1]?.type.name}
            </p>
            <img
              alt={pokemon.name}
              src={
                pokemon.sprites === undefined ? (
                  <p>carregando</p>
                ) : (
                  pokemon.sprites.other["official-artwork"].front_default
                )
              }
              height={110}
              width={110}
            />
          </DivInfos>

          <DivMoves>
            <h3>Moves</h3>
            <a>
              {pokemon.moves === undefined ? "" : pokemon.moves[0].move.name}
            </a>
            <a>
              {pokemon.moves === undefined ? "" : pokemon.moves[1].move.name}
            </a>
            <a>
              {pokemon.moves === undefined ? "" : pokemon.moves[2].move.name}
            </a>
            <a>
              {pokemon.moves === undefined ? "" : pokemon.moves[4].move.name}
            </a>
          </DivMoves>
        </CardDetalhes>
      </main>
    </div>
  );
}
