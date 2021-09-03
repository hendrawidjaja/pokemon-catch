/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useState } from "react";
import { gqlQuery, gqlQueryAbilites } from "../PokemonQuerying";

import PokemonDetailsPage from "../PokemonDetailsPage";

import { Button } from "../../styles/button";
import {
  ContainerCards,
  Img,
  Li,
  LoadingText,
  P,
  Title,
  Ul,
  WrapperButton,
  WrapperLoadingScreen,
} from "./style";

import listReducer, { LISTACTION } from "../../Reducers/ListReducer";

const initialState = {
  image: "",
  isLoading: false,
  limit: 20,
  name: "ditto",
  offset: 1,
  pokemonDetails: "",
  showDetail: false,
  pokemonList: [],
};

const PokemonListPage = () => {
  const [state, dispatch] = useReducer(listReducer, initialState);
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

  /* useEffect(() => {
    console.log("87", state);
    return () => {};
  }, [state]); */

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
      {!state.showDetail && !state.isLoading && (
        <>
          <div className="wrapper-title">
            <Title className="title">List of pokemons</Title>
          </div>
          <Ul className="list-cards">
            {result &&
              result?.results?.map((item, key) => {
                return (
                  <Li
                    // get pokemon information more details, show modal
                    onClick={() => handleClickPokemon(item)}
                    key={key}
                    className={`pokemon-cards`}
                  >
                    <Img className="" src={item.image} alt="img" />
                    <P>{item.name}</P>
                  </Li>
                );
              })}
          </Ul>

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

      {state.isLoading && (
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
