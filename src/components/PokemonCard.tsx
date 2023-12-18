import React from "react";
import { useFetchPokemonByNameQuery } from "../store";
import { useNavigate } from "react-router-dom";

function PokemonCard({ name }: { name: string }) {
  const { data: pokemon, isFetching, error } = useFetchPokemonByNameQuery(name);

  const navigate = useNavigate();

  let photoUrl: string = "";
  let pokemonName: string = "";
  let pokeId: number = 0;

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
    pokeId = pokemon.id;
  }
  return (
    <div
      onClick={() => {
        navigate(`/pokemon/${name}`);
      }}
      className="flex flex-col border-2 rounded m-5 cursor-pointer"
    >
      <img className="h-48 w-68" src={photoUrl} alt={pokemonName} />
      <div className="flex justify-center">
        <h5 className="text-lg font-bold mb-4">
          #{pokeId} {pokemonName}
        </h5>
      </div>
    </div>
  );
}

export default PokemonCard;
