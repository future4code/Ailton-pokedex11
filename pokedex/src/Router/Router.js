import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home.js";
import Pokedex from "../Pages/Pokedex";
import Details from "../Pages/Details";



export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path ="pokedex" element={<Pokedex/>}/>
        <Route path ="details" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  )
}
