import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";

const PokemonDetailPage = () => {
  const { pokemons } = useContext(PokemonContext);

  useEffect(() => {
    console.log("8", pokemons.length);

    return () => {};
  }, [pokemons]);

  return (
    <div>
      <h1>Pokemon Details Page</h1>
    </div>
  );
};

export default PokemonDetailPage;
