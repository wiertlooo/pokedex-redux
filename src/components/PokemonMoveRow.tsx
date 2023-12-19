import React from "react";
import { useFetchMoveQuery } from "../store";
import { BackgroundColor } from "../functions/BackgroundColor";

function PokemonMoveRow({
  moveName,
  moveLevel,
  moveLearned,
}: {
  moveName: string;
  moveLevel: number;
  moveLearned: string;
}) {
  let accuracy: number = 0;
  let damageType: string = "";
  let moveId: number = 0;
  let power: number = 0;
  let pp: number = 0;
  let moveType: string = "";

  const { data: move, isFetching, error } = useFetchMoveQuery(moveName);

  if (isFetching || error) {
    return (
      <tr>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
      </tr>
    );
  }
  if (move) {
    accuracy = move.accuracy || 0;
    damageType = move.damage_class.name || "";
    moveId = move.id || 0;
    power = move.power || 0;
    pp = move.pp || 0;
    moveType = move.type.name || "";
  }
  return (
    <tr>
      <td className="text-white">{moveId}</td>
      <td className="text-white">{moveName}</td>
      <td className="text-white">{moveLevel}</td>
      <td className="text-white">{moveLearned}</td>
      <td className="text-white">{damageType}</td>
      <td className="text-white">{power}</td>
      <td className="text-white">{accuracy}</td>
      <td className="text-white">{pp}</td>
      <td className={BackgroundColor(moveType)}>{moveType}</td>
    </tr>
  );
}

export default PokemonMoveRow;
