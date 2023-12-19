import React from "react";
import { BackgroundColor } from "../functions/BackgroundColor";

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
