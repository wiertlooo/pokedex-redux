import React from "react";
import { useNavigate } from "react-router-dom";

function PokemonNav() {
  const navigate = useNavigate();

  return (
    <div className="bg-red-500">
      <div className="ml-24 flex flex-row h-20 items-center">
        <div className="m-5">WIERT-DEX</div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/pokemons/1");
          }}
        >
          POKEMONS
        </div>
      </div>
    </div>
  );
}

export default PokemonNav;
