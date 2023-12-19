import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonsApi } from "./apis/pokemonsApi";
import { movesApi } from "./apis/movesApi";

export const store = configureStore({
  reducer: {
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
    [movesApi.reducerPath]: movesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(pokemonsApi.middleware)
      .concat(movesApi.middleware);
  },
});

setupListeners(store.dispatch);

export const {
  useFetchPokemonsQuery,
  useFetchPokemonByNameQuery,
  useFetchPokemonsForPageQuery,
  useFetchPokemonCharacteristicsQuery,
} = pokemonsApi;

export const { useFetchMoveQuery } = movesApi;
