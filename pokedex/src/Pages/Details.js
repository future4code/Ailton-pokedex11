import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../Router/coordinator'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function Details() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const navigate = useNavigate()

  console.log(params)

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((res) => {
        console.log('Os detalhes:', res.data)
      setDetails(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




  return (
    <div>
      <h1>Detalhes</h1>
    <p>{details.name}</p>
      <button onClick={()=>goToHomePage(navigate)}>Home</button>
      </div>
  )
}
