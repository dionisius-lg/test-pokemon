import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemon.slice";

export * from "./pokemon.slice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})
