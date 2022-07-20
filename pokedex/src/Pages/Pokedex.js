import React, {useState,useEffect}from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { goToHomePage } from '../Router/coordinator'

export default function Pokedex() {
  const navigate = useNavigate()

  

  return (
    <div>
      <h1>Pokedex</h1>
      <div>
      </div>
    <button onClick={()=>goToHomePage(navigate)}>Home</button>
      
      </div>
  )
}
