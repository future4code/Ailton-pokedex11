import React, {useState,useEffect}from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { goToHomePage } from '../Router/coordinator'

export default function Pokedex(props) {
  const navigate = useNavigate()
  const [listaPokemon, setListaPokemon] = useState([])

  const removerDaPokedex= (pokemon) => {
    const NovaPokedex = props.pokedex.filter((p) => p.name !== pokemon.name);
    props.setPokedex(NovaPokedex);
    const NovaListaPokemon = [...listaPokemon, pokemon];
    setListaPokemon(NovaListaPokemon);
  };

  const pokedexlist = props.pokedex && props.pokedex?.map((poke)=>{

    return <div> {poke.name} 
    <button onClick={()=>removerDaPokedex(poke)}>Remomer</button>
    </div>
    
  })

  return (
    <div>
      <h1>Pokedex</h1>
      <div>
      {pokedexlist}
      
      </div>
    <button onClick={()=>goToHomePage(navigate)}>Home</button>
      
      </div>
  )
}
