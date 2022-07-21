import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home.js";
import Pokedex from "../Pages/Pokedex";
import Details from "../Pages/Details";



export default function Router() {
  const [pokedex, setPokedex] = React.useState([])




  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home setPokedex={setPokedex}/>}/>
        <Route path ="pokedex" element={<Pokedex pokedex={pokedex} setPokedex={setPokedex}/> }/>
        <Route path ="/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  )
}
