import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPokemonByNameQuery } from "../store";
import { PokemonType } from "../store/apis/pokemonsApi";
import PokemonTypeContainer from "./PokemonTypeContainer";

interface PokeName {
  name?: string;
  [key: string]: string | undefined;
}

function PokemonDetailed() {
  let pokeImage: string = "";
  let pokeName: string;
  let pokeTypes: PokemonType[] = [];

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
  }

  return (
    <div>
      <img src={pokeImage} alt={pokeName} />
      <div>
        {pokeTypes.map((type) => {
          return (
            <div key={type.type.name}>
              <PokemonTypeContainer type={type.type.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonDetailed;
