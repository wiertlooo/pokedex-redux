import React from "react";
import { PokemonMove } from "../store/apis/pokemonsApi";
import PokemonMoveRow from "./PokemonMoveRow";

function PokemonDetailedMoveTable({ pokeMoves }: { pokeMoves: PokemonMove[] }) {
  return (
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
              moveLearned={move.version_group_details[0].move_learn_method.name}
            />
          );
        })}
      </thead>
    </table>
  );
}

export default PokemonDetailedMoveTable;
