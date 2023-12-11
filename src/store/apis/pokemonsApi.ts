import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pokemonsApi = createApi({
  reducerPath: "pokemons",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints(builder) {
    return {
      fetchPokemons: builder.query({
        query: () => ({
          url: "/pokemon?limit=719",
          method: "GET",
        }),
      }),
    };
  },
});

export const { useFetchPokemonsQuery } = pokemonsApi;

export { pokemonsApi };
