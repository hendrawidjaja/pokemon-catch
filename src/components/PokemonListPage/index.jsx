import React, { useContext, useEffect, useState } from "react";
import { gqlQuery, gqlQueryAbilites } from "../PokemonQuerying";
import { LISTACTION } from "../../Reducers/listReducer";
import { ListContext, PokemonContext } from "../../contexts/PokemonContext";
import PokemonCollection from "../PokemonCollection/PokemonCollection";
import PokemonDetailsPage from "../PokemonDetailsPage";

import { Button } from "../../styles/button";
import {
  Container,
  CardItem,
  ContainerCards,
  Img,
  ListCards,
  LoadingText,
  P,
  Title,
  WrapperButton,
  WrapperLoadingScreen,
  WrapperTitle,
  WrapperButtonCollection,
} from "./style";

import { IconCollection } from "../../assets/IconPack";

const PokemonListPage = () => {
  const { listState, dispatchList } = useContext(ListContext);
  const { pokemons } = useContext(PokemonContext);

  const offset = listState.offset;
  const limit = listState.limit;

  const [pokemonName, setPokemonName] = useState("ditto");
  const [result, setResult] = useState();
  const [pokemonDetails, setPokemonDetails] = useState();

  const Fetching = () => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: gqlQuery,
        variables: {
          limit,
          offset,
        },
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => setResult(res?.data?.pokemons));
  };

  const FetchingPokemonDetails = () => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: gqlQueryAbilites,
        variables: {
          pokemonName,
        },
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => setPokemonDetails(res?.data?.pokemon));
  };

  useEffect(() => {
    Fetching();
    return () => {}; // eslint-disable-next-line
  }, [offset]);

  useEffect(() => {
    FetchingPokemonDetails();
    return () => {}; // eslint-disable-next-line
  }, [pokemonName]);

  const handleClickPokemon = (item) => {
    // extract pokemon name, and image
    setPokemonName(item.name);

    dispatchList({
      type: LISTACTION.FETCH_POKEMON,
      payload: { image: item.image, name: item.name },
    });

    if (pokemonDetails) {
      dispatchList({
        type: LISTACTION.FETCH_DONE,
      });
    }
  };

  const handleClickPrev = () => {
    dispatchList({ type: LISTACTION.REDUCE_OFFSET });
  };

  const handleClickNext = () => {
    dispatchList({ type: LISTACTION.RAISE_OFFSET });
  };

  const handleClickCollection = () => {
    dispatchList({ type: LISTACTION.TOGGLE_COLLECTION });
  };

  return (
    <Container role="main-container" className="main-container">
      {pokemons.length > 0 && (
        <WrapperButtonCollection className="wrapper-buttons">
          Show Collection
          <span onClick={() => handleClickCollection()}>
            <IconCollection />
          </span>
        </WrapperButtonCollection>
      )}

      {!listState.showCollection && (
        <ContainerCards role="container-cards" className="container-cards">
          {!listState.showDetail && !listState.isLoadingPokemonDetail && (
            <>
              <WrapperTitle className="wrapper-title">
                <Title data-testid="title" className="title">
                  List of pokemons
                </Title>
              </WrapperTitle>
              <ListCards data-testid="listCards" className="list-cards">
                {result &&
                  result?.results?.map((item, key) => {
                    return (
                      <CardItem
                        // get pokemon information more details, show modal
                        onClick={() => handleClickPokemon(item)}
                        key={key}
                        className="card-item"
                      >
                        <Img className="" src={item.image} alt="img" />
                        <P>{item.name}</P>
                      </CardItem>
                    );
                  })}
              </ListCards>

              <WrapperButton className="wrapper-buttons">
                <Button
                  className="btn-prev"
                  onClick={() => handleClickPrev()}
                  disabled={listState.offset <= 1}
                >
                  <span data-testid="btnPrev">Prev</span>
                </Button>

                <Button className="btn-next" onClick={() => handleClickNext()}>
                  <span data-testid="btnNext">Next</span>
                </Button>
              </WrapperButton>
            </>
          )}

          {listState.isLoadingPokemonDetail && (
            <WrapperLoadingScreen>
              <LoadingText>Loading...</LoadingText>
            </WrapperLoadingScreen>
          )}

          {listState.showDetail && (
            <PokemonDetailsPage
              data={pokemonDetails}
              img={listState.image}
              dispatchList={dispatchList}
            />
          )}
        </ContainerCards>
      )}

      {listState.showCollection && <PokemonCollection />}
    </Container>
  );
};

export default PokemonListPage;
