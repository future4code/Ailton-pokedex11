import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../Router/coordinator'

export default function Pokedex() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Pokedex</h1>
    <button onClick={()=>goToHomePage(navigate)}>Home</button>
      
      </div>
  )
}
