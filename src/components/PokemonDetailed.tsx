import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPokemonByNameQuery } from "../store";
import { PokemonMove, PokemonType } from "../store/apis/pokemonsApi";
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
      <table>
        <thead>
          <tr>
            <th>NUMBER</th>
            <th>MOVE</th>
            <th>LVL</th>
            <th>LEARNED</th>
          </tr>
          {pokeMoves.map((move: PokemonMove, index: number) => {
            return (
              <tr key={move.move.name}>
                <td>{index + 1}</td>
                <td>{move.move.name}</td>
                <td>{move.version_group_details[0].level_learned_at}</td>
                <td>{move.version_group_details[0].move_learn_method.name}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default PokemonDetailed;
