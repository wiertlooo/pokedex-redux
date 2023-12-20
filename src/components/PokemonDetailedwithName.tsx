import React from "react";
import { useFetchPokemonByNameQuery } from "../store";
import {
  PokemonMove,
  PokemonStat,
  PokemonType,
} from "../store/apis/pokemonsApi";
import PokemonDetailedCard from "./PokemonDetailedCard";
import PokemonDetailedMoveTable from "./PokemonDetailedMoveTable";
import PokemonDetailedStatsCard from "./PokemonDetailedStatsCard";
import pokeball from "../assets/pokeball.png";

function PokemonDetailedWithName({ pokeName }: { pokeName: string }) {
  let pokeImage: string = pokeball;
  let pokeTypes: PokemonType[] = [];
  let pokeId: number = 0;
  let pokeMoves: PokemonMove[] = [];
  let pokeImageShiny: string = "";
  let pokeStats: PokemonStat[] = [];

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
  if (isFetching) {
    return <div>Loading.....</div>;
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

export default PokemonDetailedWithName;
