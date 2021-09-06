import React, { createContext, useReducer, useEffect } from "react";
import listReducer, { initialListState } from "../Reducers/listReducer";
import pokemonReducer from "../Reducers/pokemonReducer";

export const PokemonContext = createContext();
export const ListContext = createContext();

const PokemonContextProvider = (props) => {
  const [listState, dispatchList] = useReducer(listReducer, initialListState);

  const [pokemons, dispatch] = useReducer(pokemonReducer, [], () => {
    const localdata = localStorage.getItem("pokemons");
    return localdata ? JSON.parse(localdata) : [];
  });

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <PokemonContext.Provider value={{ pokemons, dispatch }}>
      <ListContext.Provider value={{ listState, dispatchList }}>
        {props.children}
      </ListContext.Provider>
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
