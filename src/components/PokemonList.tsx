import React from "react";
import { useFetchPokemonsForPageQuery } from "../store";
import PokemonCard from "./PokemonCard";
import { useParams } from "react-router-dom";

interface PageNumber {
  page?: string;
  [key: string]: string | undefined;
}

function PokemonList() {
  let content;

  const { page } = useParams<PageNumber>();
  let pageNumber: number | undefined;

  if (page) {
    const parsedPage = parseInt(page, 10);
    if (!isNaN(parsedPage)) {
      pageNumber = parsedPage;
    }
  }
  if (pageNumber === undefined || pageNumber > 30) {
    pageNumber = 1;
  }

  const { data, error, isLoading } = useFetchPokemonsForPageQuery(pageNumber);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    content = data.results.map((pokemon) => {
      return (
        <div key={pokemon.name}>
          <PokemonCard name={pokemon.name} />
        </div>
      );
    });
  }
  return <div className="flex flex-wrap w-9/12 mx-auto">{content}</div>;
}

export default PokemonList;
