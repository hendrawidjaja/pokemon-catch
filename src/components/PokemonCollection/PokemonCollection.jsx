import React, { useContext } from "react";
import { ListContext, PokemonContext } from "../../contexts/PokemonContext";

import { REDUCERCONSTANT } from "../../Reducers/pokemonReducer";
import { LISTACTION } from "../../Reducers/listReducer";

import {
  Card,
  CardList,
  Container,
  Name,
  Title,
  WrapperTitle,
  SmallNote,
  WrapperButtons,
} from "./style";

import { IconBack } from "../../assets/IconPack";

const PokemonCollection = () => {
  const { RELEASE_POKEMON } = REDUCERCONSTANT;
  const { pokemons, dispatch } = useContext(PokemonContext);
  const { dispatchList } = useContext(ListContext);

  const releasePokemon = (id) => {
    dispatch({ type: RELEASE_POKEMON, payload: { id } });
  };

  const handleClickCollection = () => {
    dispatchList({ type: LISTACTION.TOGGLE_COLLECTION });
  };

  return (
    <Container data-testid="container" className="container">
      {pokemons.length > 0 ? (
        <WrapperTitle className="wrapper-title">
          <Title className="title">List of your collection</Title>
          <SmallNote>Click to remove</SmallNote>
        </WrapperTitle>
      ) : (
        <>
          <WrapperButtons
            data-testid="wrapper-buttons"
            className="wrapper-buttons"
          >
            <span className="btn-back" onClick={() => handleClickCollection()}>
              <IconBack />
            </span>
          </WrapperButtons>

          <Title center className="title">
            You don't have any collection
          </Title>
        </>
      )}

      {pokemons.length > 0 && (
        <CardList>
          {pokemons.map((item) => (
            <Card
              key={item.id}
              className="card"
              onClick={() => releasePokemon(item.id)}
            >
              <Name data-testid="name" className="name">
                {item.name}
              </Name>
              <img data-testid="img" className="img" src={item.img} alt="img" />
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
