import React, { useState } from "react";
import { PokemonType } from "../store/apis/pokemonsApi";

import PokemonTypeContainer from "./PokemonTypeContainer";
import PokemonCharacteristic from "./PokemonCharacteristic";

function PokemonDetailedCard({
  pokeImage,
  pokeImageShiny,
  pokeName,
  pokeTypes,
  pokeId,
}: {
  pokeImage: string;
  pokeImageShiny: string;
  pokeName: string;
  pokeTypes: PokemonType[];
  pokeId: number;
}) {
  const [visibleImage, setVisibleImage] = useState<string>(pokeImage);

  return (
    <div className="flex flex-row items-center border border-gray-700 rounded-md bg-black text-white">
      <div className="flex flex-col items-center pl-8">
        <div className="flex flex-row">
          <button
            className="border border-grey-700 mt-2 p-1"
            onClick={() => setVisibleImage(pokeImage)}
          >
            classic
          </button>
          <button
            className="border border-grey-700 mt-2 p-1"
            onClick={() => setVisibleImage(pokeImageShiny)}
          >
            shiny
          </button>
        </div>
        <img
          className="flex w-52 mb-20 mt-10"
          src={visibleImage}
          alt={pokeName}
        />
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
        <h1 className="font-bold text-2xl">{pokeName.toUpperCase()}</h1>
        <PokemonCharacteristic pokeId={pokeId} />
      </div>
    </div>
  );
}

export default PokemonDetailedCard;
