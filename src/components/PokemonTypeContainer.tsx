import React from "react";

const BackgroundColor = (type: string): string => {
  switch (type) {
    case "normal":
      return "bg-neutral-300";
    case "grass":
      return "bg-green-500";
    case "poison":
      return "bg-purple-500";
    case "fire":
      return "bg-orange-500";
    case "water":
      return "bg-blue-500";
    case "flying":
      return "bg-blue-100";
    case "bug":
      return "bg-lime-700";
    case "electric":
      return "bg-yellow-300";
    case "ground":
      return "bg-amber-400";
    case "fairy":
      return "bg-gradient-to-r from-purple-700 to-indigo-700";
    case "fighting":
      return "bg-red-800";
    case "psychic":
      return "bg-pink-500";
    case "rock":
      return "bg-amber-200";
    case "ice":
      return "bg-cyan-300";
    case "ghost":
      return "bg-purple-800";
    case "dragon":
      return "bg-violet-800";
    case "steel":
      return "bg-stone-400";
    case "dark":
      return "bg-orange-950";
    default:
      return "bg-grey-500";
  }
};

function PokemonTypeContainer({ type }: { type: string }) {
  return <div className={`${BackgroundColor(type)}`}>{type}</div>;
}

export default PokemonTypeContainer;
