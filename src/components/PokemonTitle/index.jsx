/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";

import { REDUCERCONSTANT } from "../../Constant/constantReducer";
import { ContainerTitle, H1, Li, P, Ul } from "./style";

const { RELEASE_POKEMON } = REDUCERCONSTANT;

const Titlebar = () => {
  const { pokemons, dispatch } = useContext(PokemonContext);

  const releasePokemon = (id) => {
    dispatch({ type: RELEASE_POKEMON, id });
  };

  return (
    <ContainerTitle className="container-title">
      <H1 className="header">Pokemon List Page</H1>

      <P className="title">
        You
        {pokemons.length > 0
          ? ` have ${pokemons.length} pokemon${
              pokemons.length > 1 ? "s" : ""
            } in your possessions`
          : ` don't have any pokemons in your inventory`}
      </P>

      {pokemons.length > 0 && (
        <Ul className="wrapper-list-item-pokemon">
          {pokemons.map((uniquepokemon, i) => {
            return (
              <Li
                className="list-item-pokemon"
                key={i}
                onClick={() => releasePokemon(uniquepokemon.id)}
              >
                <span>{uniquepokemon.name}</span>
              </Li>
            );
          })}
        </Ul>
      )}
    </ContainerTitle>
  );
};

export default Titlebar;
