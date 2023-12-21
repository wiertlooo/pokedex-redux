import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function PokemonNav() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/pokemon/${searchTerm}`);
  };

  return (
    <div className="bg-black text-white font-bold mb-10 flex flex-row">
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
      <div className="flex h-20 items-center flex-end ml-auto mr-24">
        <form
          onSubmit={(e) => searchSubmitHandle(e)}
          className="flex flex-row items-center"
        >
          <input
            placeholder="Enter pokemoon name/id"
            className="text-black font-light"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="text-black bg-white pt-1 pb-1 px-2 rounded-md ml-2"
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default PokemonNav;
