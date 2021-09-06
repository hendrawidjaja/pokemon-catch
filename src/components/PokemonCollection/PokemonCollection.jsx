import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { Card, Name } from "./style";
import { WrapperTitle } from "../PokemonListPage/style";
import { Container, Title } from "./style";

const PokemonCollection = () => {
  const { pokemons, dispatch } = useContext(PokemonContext);

  useEffect(() => {
    return () => {};
  }, [pokemons]);

  return (
    <Container className="container">
      <WrapperTitle className="wrapper-title">
        <Title className="title">List of your collection</Title>
      </WrapperTitle>

      {pokemons.map((item) => {
        return (
          <Card key={item.id} className="card">
            <img className="img" src={item.img} alt="img" />
            <Name className="name">{item.name}</Name>
            <Name className="original-name">{item.data.name}</Name>
          </Card>
        );
      })}
    </Container>
  );
};

export default PokemonCollection;
