import React from "react";
import { useFetchPokemonsForPageQuery } from "../store";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const { data, error, isLoading } = useFetchPokemonsForPageQuery(1);
  let content;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    content = data.results.map((pokemon, index: number) => {
      return (
        <div key={pokemon.name}>
          {pokemon.name}
          <PokemonCard pokemonId={index + 1} />
        </div>
      );
    });
  }
  return <div>{content}</div>;
}

export default PokemonList;
