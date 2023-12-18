import React from "react";
import PokemonList from "./components/PokemonList";
import PokemonDetailed from "./components/PokemonDetailed";
import { Route, Routes } from "react-router-dom";
import PokemonNav from "./components/PokemonNav";

function App() {
  return (
    <>
      <PokemonNav />
      <Routes>
        <Route path="/pokemons/:page" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetailed />} />
      </Routes>
    </>
  );
}

export default App;
