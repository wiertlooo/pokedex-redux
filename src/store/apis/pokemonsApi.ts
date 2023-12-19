import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Pokemon {
  name: string;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonMove {
  move: {
    name: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
    };
    version_group: {
      name: string;
    };
  }[];
}
export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface DetailedPokemon extends Pokemon {
  id: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  types: PokemonType[];
  moves: PokemonMove[];
  stats: PokemonStat[];
}

interface Description {
  description: string;
}

interface PokemonCharacteristics {
  descriptions: Description[];
  highest_stat: {
    name: string;
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
      fetchPokemonByName: builder.query<DetailedPokemon, string>({
        query: (name) => ({
          url: `/pokemon/${name}`,
          method: "GET",
        }),
      }),
      fetchPokemonsForPage: builder.query<FetchedPokemons, number>({
        query: (pageNumber) => ({
          //(pageNumber-1) * 20 - if page number is 1 it will fetch data for id's 1-19
          url: `/pokemon?limit=24&offset=${(pageNumber - 1) * 24}`,
          method: "GET",
        }),
      }),
      fetchPokemonCharacteristics: builder.query<
        PokemonCharacteristics,
        number
      >({
        query: (pokemonId) => ({
          url: `/characteristic/${pokemonId}`,
          method: "GET",
        }),
      }),
    };
  },
});

export const {
  useFetchPokemonsQuery,
  useFetchPokemonByNameQuery,
  useFetchPokemonsForPageQuery,
  useFetchPokemonCharacteristicsQuery,
} = pokemonsApi;

export { pokemonsApi };
