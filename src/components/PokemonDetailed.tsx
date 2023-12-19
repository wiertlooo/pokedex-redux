import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPokemonByNameQuery } from "../store";
import { PokemonMove, PokemonType } from "../store/apis/pokemonsApi";
import PokemonTypeContainer from "./PokemonTypeContainer";
import PokemonCharacteristic from "./PokemonCharacteristic";
import pokedexImg from "../assets/pokedex-color.svg";
import PokemonMoveRow from "./PokemonMoveRow";

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
    console.log(pokeMoves);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center border border-gray-700 rounded-md bg-black text-white">
        <div className="flex flex-col items-center pl-8">
          <img className="flex w-52 my-20" src={pokeImage} alt={pokeName} />
          <div className="flex flex-row mb-10">
            {pokeTypes.map((type) => {
              return (
                <PokemonTypeContainer
                  key={type.type.name}
                  type={type.type.name}
                />
              );
            })}
          </div>
        </div>
        <div className="ml-10 flex flex-col items-center pr-8">
          <h1 className="font-bold text-2xl">{name?.toUpperCase()}</h1>
          <PokemonCharacteristic pokeId={pokeId} />
        </div>
      </div>
      <table className="border-collapse border border-gray-700 text-center bg-black">
        <caption className="caption-top text-white">MOVE LIST</caption>
        <thead>
          <tr>
            <th className="px-2 text-white">ID</th>
            <th className="px-2 text-white">MOVE</th>
            <th className="px-2 text-white">LVL</th>
            <th className="px-2 text-white">LEARNED</th>
            <th className="px-2 text-white">DMG TYPE</th>
            <th className="px-2 text-white">POWER</th>
            <th className="px-2 text-white">ACCURACY</th>
            <th className="px-2 text-white">PP</th>
            <th className="px-2 text-white">TYPE</th>
          </tr>
          {pokeMoves.map((move: PokemonMove) => {
            return (
              <PokemonMoveRow
                key={move.move.name}
                moveName={move.move.name}
                moveLevel={move.version_group_details[0].level_learned_at}
                moveLearned={
                  move.version_group_details[0].move_learn_method.name
                }
              />
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default PokemonDetailed;
