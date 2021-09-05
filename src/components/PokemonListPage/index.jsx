/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useState } from "react";
import { gqlQuery, gqlQueryAbilites } from "../PokemonQuerying";

import PokemonDetailsPage from "../PokemonDetailsPage";

import { Button } from "../../styles/button";
import {
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
} from "./style";

import listReducer, {
  initialListState,
  LISTACTION,
} from "../../Reducers/listReducer";

const PokemonListPage = () => {
  const [state, dispatch] = useReducer(listReducer, initialListState);
  const offset = state.offset;
  const limit = state.limit;

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
  }, [offset]);

  useEffect(() => {
    FetchingPokemonDetails();
    return () => {};
  }, [pokemonName]);

  const handleClickPokemon = (item) => {
    // extract pokemon name, and image
    setPokemonName(item.name);

    dispatch({
      type: LISTACTION.FETCH_POKEMON,
      payload: { image: item.image, name: item.name },
    });

    if (pokemonDetails) {
      dispatch({
        type: LISTACTION.FETCH_DONE,
      });
    }
  };

  const handleClickPrev = () => {
    dispatch({ type: LISTACTION.REDUCE_OFFSET });
  };

  const handleClickNext = () => {
    dispatch({ type: LISTACTION.RAISE_OFFSET });
  };

  return (
    <ContainerCards className="container-cards">
      {!state.showDetail && !state.isLoadingPokemonDetail && (
        <>
          <WrapperTitle className="wrapper-title">
            <Title className="title">List of pokemons</Title>
          </WrapperTitle>
          <ListCards className="list-cards">
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
              disabled={state.offset <= 1}
            >
              <span>Prev</span>
            </Button>

            <Button className="btn-next" onClick={() => handleClickNext()}>
              <span>Next</span>
            </Button>
          </WrapperButton>
        </>
      )}

      {state.isLoadingPokemonDetail && (
        <WrapperLoadingScreen>
          <LoadingText>Loading...</LoadingText>
        </WrapperLoadingScreen>
      )}

      {state.showDetail && (
        <PokemonDetailsPage
          data={pokemonDetails}
          img={state.image}
          dispatch={dispatch}
        />
      )}
    </ContainerCards>
  );
};

export default PokemonListPage;
