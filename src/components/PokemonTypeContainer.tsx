import React from "react";

const BackgroundColor = (type: string): string => {
  switch (type) {
    case "normal":
      return "bg-neutral-300";
    case "grass":
      return "bg-green-500 text-white";
    case "poison":
      return "bg-purple-500 text-white";
    case "fire":
      return "bg-orange-500 text-white";
    case "water":
      return "bg-blue-500 text-white";
    case "flying":
      return "bg-blue-100 text-black";
    case "bug":
      return "bg-lime-700 text-white";
    case "electric":
      return "bg-yellow-300 text-white";
    case "ground":
      return "bg-amber-400";
    case "fairy":
      return "bg-gradient-to-r from-purple-700 to-indigo-700 text-white";
    case "fighting":
      return "bg-red-800 text-white";
    case "psychic":
      return "bg-pink-500 text-white";
    case "rock":
      return "bg-amber-200";
    case "ice":
      return "bg-cyan-300";
    case "ghost":
      return "bg-purple-800 text-white";
    case "dragon":
      return "bg-violet-800 text-white";
    case "steel":
      return "bg-stone-400 text-white";
    case "dark":
      return "bg-orange-950 text-white";
    default:
      return "bg-grey-500";
  }
};

function PokemonTypeContainer({ type }: { type: string }) {
  return (
    <div
      className={`${BackgroundColor(
        type
      )} flex rounded px-12 w-20 h-7 justify-center items-center font-semibold mx-1`}
    >
      {type.toUpperCase()}
    </div>
  );
}

export default PokemonTypeContainer;
