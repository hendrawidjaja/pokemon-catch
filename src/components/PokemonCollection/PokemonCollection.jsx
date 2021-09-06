import React, { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import {
  Card,
  CardList,
  Container,
  Name,
  Title,
  WrapperTitle,
  SmallNote,
} from "./style";

import { REDUCERCONSTANT } from "../../Reducers/pokemonReducer";
const { RELEASE_POKEMON } = REDUCERCONSTANT;

const PokemonCollection = () => {
  const { pokemons, dispatch } = useContext(PokemonContext);

  const releasePokemon = (id) => {
    dispatch({ type: RELEASE_POKEMON, payload: { id } });
  };

  return (
    <Container className="container">
      {pokemons.length > 0 ? (
        <WrapperTitle className="wrapper-title">
          <Title className="title">List of your collection</Title>
          <SmallNote>Click to remove</SmallNote>
        </WrapperTitle>
      ) : (
        <Title center className="title">
          You don't have any collection
        </Title>
      )}

      {pokemons.length > 0 && (
        <CardList>
          {pokemons.map((item) => (
            <Card
              key={item.id}
              className="card"
              onClick={() => releasePokemon(item.id)}
            >
              <Name className="name">{item.name}</Name>
              <img className="img" src={item.img} alt="img" />
              <Name smaller className="original-name">
                {item.data.name}
              </Name>
            </Card>
          ))}
        </CardList>
      )}
    </Container>
  );
};

export default PokemonCollection;
