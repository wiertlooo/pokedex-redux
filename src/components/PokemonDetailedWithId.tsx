import React, { useEffect, useState } from "react";
import { useFetchPokemonByIdQuery, useFetchPokemonByNameQuery } from "../store";
import {
  PokemonMove,
  PokemonStat,
  PokemonType,
} from "../store/apis/pokemonsApi";
import PokemonDetailedCard from "./PokemonDetailedCard";
import PokemonDetailedMoveTable from "./PokemonDetailedMoveTable";
import PokemonDetailedStatsCard from "./PokemonDetailedStatsCard";
import pokeball from "../assets/pokeball.png";

function PokemonDetailedWithId({ pokeId }: { pokeId: number }) {
  let pokeImage: string = pokeball;
  let pokeTypes: PokemonType[] = [];
  let pokeMoves: PokemonMove[] = [];
  let pokeImageShiny: string = "";
  let pokeStats: PokemonStat[] = [];
  let pokeName: string = "";

  const { data: pokemon, error, isFetching } = useFetchPokemonByIdQuery(pokeId);

  if (pokemon) {
    pokeImage = pokemon.sprites.front_default;
    pokeTypes = pokemon.types;
    pokeMoves = pokemon.moves;
    pokeImageShiny = pokemon.sprites.front_shiny;
    pokeStats = pokemon.stats;
    pokeName = pokemon.name;
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

export default PokemonDetailedWithId;
