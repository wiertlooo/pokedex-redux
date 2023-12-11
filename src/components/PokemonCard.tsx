import React from "react";
import { useFetchPokemonByNameQuery } from "../store";

function PokemonCard({ name }: { name: string }) {
  const { data: pokemon, isFetching, error } = useFetchPokemonByNameQuery(name);

  const cardStyle: React.CSSProperties = {
    width: "18rem",
    margin: "3px",
  };

  let photoUrl;
  let pokemonName;

  if (error) {
    return <div>error</div>;
  }
  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (pokemon) {
    photoUrl = pokemon.sprites.front_default;
    //Changing first letter to capital
    pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  }
  return (
    <div className="card" style={cardStyle}>
      <img className="card-img-top" src={photoUrl} alt={pokemonName} />
      <div className="card-body">
        <h5 className="card-title">{pokemonName}</h5>
      </div>
    </div>
  );
}

export default PokemonCard;
