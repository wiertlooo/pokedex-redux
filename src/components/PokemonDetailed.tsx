import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPokemonByNameQuery } from "../store";
import {
  PokemonMove,
  PokemonStat,
  PokemonType,
} from "../store/apis/pokemonsApi";
import PokemonDetailedCard from "./PokemonDetailedCard";
import PokemonDetailedMoveTable from "./PokemonDetailedMoveTable";
import PokemonDetailedStatsCard from "./PokemonDetailedStatsCard";

interface PokeName {
  name?: string;
  [key: string]: string | undefined;
}

function PokemonDetailed() {
  let pokeImage: string = "";
  let pokeName: string;
  let pokeTypes: PokemonType[] = [];
  let pokeId: number = 0;
  let pokeMoves: PokemonMove[] = [];
  let pokeImageShiny: string = "";
  let pokeStats: PokemonStat[] = [];

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
    pokeMoves = pokemon.moves;
    pokeImageShiny = pokemon.sprites.front_shiny;
    pokeStats = pokemon.stats;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <PokemonDetailedCard
          pokeImage={pokeImage}
          pokeImageShiny={pokeImageShiny}
          pokeName={pokeName}
          pokeTypes={pokeTypes}
          pokeId={pokeId}
        />
        <PokemonDetailedStatsCard pokeStats={pokeStats} />
      </div>
      <PokemonDetailedMoveTable pokeMoves={pokeMoves} />
    </div>
  );
}

export default PokemonDetailed;
