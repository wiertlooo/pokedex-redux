import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonsApi } from "./apis/pokemonsApi";

export const store = configureStore({
  reducer: {
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemonsApi.middleware);
  },
});

setupListeners(store.dispatch);

export const {
  useFetchPokemonsQuery,
  useFetchPokemonByNameQuery,
  useFetchPokemonsForPageQuery,
  useFetchPokemonCharacteristicsQuery,
} = pokemonsApi;
