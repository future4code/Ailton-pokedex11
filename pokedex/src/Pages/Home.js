import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage } from '../Router/coordinator'
import styled from 'styled-components'
import Header from '../components/Header'

const Card = styled.div`
border: 1px solid black;
height: 100px;
width: 100px;
`

export default function Home() {
    const [pokemon,setPokemon] = useState([])
    const navigate = useNavigate()

    useEffect (()=>{
    
        getPokemons()
    },[])
    
    const getPokemons = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30')
        .then((res)=>{setPokemon(res.data.results)})
        .then(()=>{} )
    }
    
    
    const pokeList = pokemon && pokemon.map((pokemon,id)=>{
        return <Card key={id}>
        <p>{pokemon.name}</p>
        <button onClick={()=>goToDetailsPage(navigate)}>Detalhes</button>
        
        </Card>
    })
    
      return (
        <div>
            <Header/>
           {pokeList}
        </div>
      )
}
