import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Pokemon {
  name: string;
}

interface DetailedPokemon extends Pokemon {
  id: number;
  sprites: {
    front_default: string;
  };
}

interface FetchedPokemons {
  results: Pokemon[];
}

const pokemonsApi = createApi({
  reducerPath: "pokemons",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints(builder) {
    return {
      fetchPokemons: builder.query<FetchedPokemons, undefined>({
        query: () => ({
          url: "/pokemon?limit=719",
          method: "GET",
        }),
      }),
      fetchPokemonById: builder.query<DetailedPokemon, number>({
        query: (id) => ({
          url: `/pokemon/${id}`,
          method: "GET",
        }),
      }),
      fetchPokemonsForPage: builder.query<FetchedPokemons, number>({
        query: (pageNumber) => ({
          //(pageNumber-1) * 20 - if page number is 1 it will fetch data for id's 1-19
          url: `/pokemon?limit=20&offset=${(pageNumber - 1) * 20}`,
          method: "GET",
        }),
      }),
    };
  },
});

export const {
  useFetchPokemonsQuery,
  useFetchPokemonByIdQuery,
  useFetchPokemonsForPageQuery,
} = pokemonsApi;

export { pokemonsApi };
