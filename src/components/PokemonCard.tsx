import React from "react";
import { useFetchPokemonByIdQuery } from "../store";

function PokemonCard({ pokemonId }: { pokemonId: number }) {
  const { data, isFetching, error } = useFetchPokemonByIdQuery(pokemonId);
  if (error) {
    return <div>error</div>;
  }
  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (data) {
  }
  return <div>card</div>;
}

export default PokemonCard;
