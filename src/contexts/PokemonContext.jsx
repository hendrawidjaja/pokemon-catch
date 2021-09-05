import React, { createContext, useReducer, useEffect } from "react";
import pokemonReducer from "../Reducers/pokemonReducer";

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [pokemons, dispatch] = useReducer(pokemonReducer, [], () => {
    const localdata = localStorage.getItem("pokemons");
    return localdata ? JSON.parse(localdata) : [];
  });

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <PokemonContext.Provider value={{ pokemons, dispatch }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
