import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Card = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
  border: 1px solid black;
  height: 210px;
  width: 440px;
  border-radius: 12px;
  margin-bottom: 6px;

`;

const NomeCard = styled.div`
  font-family: "Tahoma";
  display: flex;
  flex-direction: column;
  
  font-size: medium;
  padding-left: 10px;
  margin-right: 200px;
`;
const DivImagem = styled.div`
  display: flex;
  align-items: flex-start;

  
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

const DivBtn = styled.div`
display: flex;
justify-content: flex-end;
button{
  height: 30px;
  border-radius: 30px;
}
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

export default function PokeCard({ poke, setPokedex }) {
    const navigate = useNavigate();
    const [click, setClick] = useState(false) 

  return (
    <Card
      key={poke.id}
      style={{
        backgroundColor: corBackGround(poke.types[0].type.name),
        color: "white",
      }}
    >
      <NomeCard>
        <p>
          <strong>#{poke.id}</strong>
        </p>
        <p>{poke.name[0].toUpperCase()}
        {poke.name.slice(1)}
        </p>
      </NomeCard>
      <DivTipos>
        <p>{poke.types[0].type.name}</p>
        <p>{poke.types[1]?.type.name}</p>
      </DivTipos>
      <DivBtn>
      <button onClick={() => navigate(`/${poke.id}`)}>Detalhes</button>
      <button
        disabled={click && "disabled"}
        onClick={() => {
          setPokedex((prevState) => [...prevState,poke]);
          setClick(true);
        }}
      >
        Capturar!
      </button>
      </DivBtn>
      <DivImagem>
        <img
          alt={poke.name}
          src={poke.sprites.other["official-artwork"].front_default}
          height={130}
          width={130}
        />
      </DivImagem>
     
    
    </Card>
  );
}
