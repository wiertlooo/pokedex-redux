import React from "react";
import { useFetchPokemonsForPageQuery } from "../store";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const { data, error, isLoading } = useFetchPokemonsForPageQuery(4);
  let content;
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    content = data.results.map((pokemon) => {
      return (
        <div key={pokemon.name}>
          <PokemonCard name={pokemon.name} />
        </div>
      );
    });
  }
  return <div style={containerStyle}>{content}</div>;
}

export default PokemonList;
