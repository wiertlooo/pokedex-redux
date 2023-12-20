import React from "react";
import { useParams } from "react-router-dom";
import PokemonDetailedWithName from "./PokemonDetailedwithName";
import PokemonDetailedWithId from "./PokemonDetailedWithId";

function PokemonDetailed() {
  const { nameOrId } = useParams<{ nameOrId: string }>();
  if (nameOrId) {
    const isId = /^\d+$/.test(nameOrId);

    if (isId) {
      const pokeId = parseInt(nameOrId, 10);
      return <PokemonDetailedWithId pokeId={pokeId} />;
    } else {
      const pokeName = nameOrId || "pikachu";
      return <PokemonDetailedWithName pokeName={pokeName} />;
    }
  }
  return <div>Ooops, error. Try again </div>;
}

export default PokemonDetailed;
