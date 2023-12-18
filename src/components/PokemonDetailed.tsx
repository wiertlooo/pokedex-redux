import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPokemonByNameQuery } from "../store";
import { PokemonType } from "../store/apis/pokemonsApi";
import PokemonTypeContainer from "./PokemonTypeContainer";
import PokemonCharacteristic from "./PokemonCharacteristic";

interface PokeName {
  name?: string;
  [key: string]: string | undefined;
}

function PokemonDetailed() {
  let pokeImage: string = "";
  let pokeName: string;
  let pokeTypes: PokemonType[] = [];
  let pokeId: number = 0;

  const { name } = useParams<PokeName>();
  if (name) {
    pokeName = name;
  } else {
    pokeName = "pikachu";
  }
  const {
    data: pokemon,
    error,
    isFetching,
  } = useFetchPokemonByNameQuery(pokeName);

  if (pokemon) {
    pokeImage = pokemon.sprites.front_default;
    pokeTypes = pokemon.types;
    pokeId = pokemon.id;
  }

  return (
    <div className="flex flex-col items-center">
      <img className="w-72" src={pokeImage} alt={pokeName} />
      <h1 className="font-bold text-2xl my-10">{name?.toUpperCase()}</h1>
      <div className="flex flex-row">
        {pokeTypes.map((type) => {
          return (
            <PokemonTypeContainer key={type.type.name} type={type.type.name} />
          );
        })}
      </div>
      <PokemonCharacteristic pokeId={pokeId} />
    </div>
  );
}

export default PokemonDetailed;
