import React from "react";
import { useFetchPokemonCharacteristicsQuery } from "../store";

function PokemonCharacteristic({ pokeId }: { pokeId: number }) {
  let description: string | React.ReactNode;
  let highestStat: string | React.ReactNode;

  const { data, isFetching, error } =
    useFetchPokemonCharacteristicsQuery(pokeId);
  if (isFetching) {
    description = <div>Loading data....</div>;
    highestStat = <div>Loading data.../</div>;
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    description = data.descriptions[7].description;
    highestStat = data.highest_stat.name;
  }

  return (
    <div className="text-center">
      {description && <div className="font-semibold my-2">{description}</div>}
      {highestStat && (
        <div className="font-semibold my-2">
          Highest statistic: {highestStat}
        </div>
      )}
    </div>
  );
}

export default PokemonCharacteristic;
