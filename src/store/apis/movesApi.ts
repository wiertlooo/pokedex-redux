import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface FetchedMove {
  accuracy: number;
  damage_class: {
    name: string;
  };
  id: number;
  power: number;
  pp: number;
  type: {
    name: string;
  };
}

const movesApi = createApi({
  reducerPath: "moves",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/move",
  }),
  endpoints(builder) {
    return {
      fetchMove: builder.query<FetchedMove, string>({
        query: (moveName) => ({
          url: `/${moveName}`,
          method: "GET",
        }),
      }),
    };
  },
});

export const { useFetchMoveQuery } = movesApi;

export { movesApi };
