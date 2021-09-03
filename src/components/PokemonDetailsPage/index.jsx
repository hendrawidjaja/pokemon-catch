import React, { useState } from "react";
import {
  ButtonBack,
  Container,
  DetailPage,
  Dice,
  Img,
  Li,
  Name,
  SmallNote,
  Title,
  ULAbilities,
  ULMoves,
  ULTypes,
  WrapperImg,
} from "./style";
import { IconBack, IconPokeBall } from "../../assets/IconPack";
import { LISTACTION } from "../../reducers/listReducer";

const PokemonDetailsPage = ({ data, img, dispatch }) => {
  const [limitMoves] = useState(15);
  const [catchEM, setCatchEM] = useState(false);

  const randomNumber = () => {
    const result = Math.random().toFixed(2);

    setCatchEM(result < 0.55 ? false : true);
    console.log(result);
  };

  const handleBtnBack = () => {
    dispatch({ type: LISTACTION.CLOSE });
  };

  return (
    <DetailPage className="pokemon-detail-page">
      <ButtonBack className="btn-back" onClick={() => handleBtnBack()}>
        <IconBack />
      </ButtonBack>

      <Name className="name">{data.name}</Name>

      <Container className="container">
        <WrapperImg className="wrapper-img">
          <Img className="pokemon-img" src={img} alt="pokemon-img" />
          {catchEM && <IconPokeBall />}
        </WrapperImg>

        {data && (
          <>
            <ULAbilities>
              <Title>Abilities:</Title>
              {data.abilities.map((ability, key) => (
                <Li key={key} className="list-ability">
                  {ability.ability.name}
                </Li>
              ))}
            </ULAbilities>

            <ULMoves>
              <Title>Moves:</Title>
              {data.moves.map(
                (move, key) =>
                  key < limitMoves && (
                    <Li key={key} className="list-move">
                      {move.move.name}
                    </Li>
                  )
              )}
              {data.moves > limitMoves && (
                <SmallNote>only {limitMoves} moves displayed</SmallNote>
              )}
            </ULMoves>

            <ULTypes>
              <Title>Types:</Title>
              {data.types.map((type, index) => (
                <Li key={index} className="list-type">
                  {type.type.name}
                </Li>
              ))}
            </ULTypes>
          </>
        )}
      </Container>

      <Dice onClick={() => randomNumber()}>Catch'em</Dice>
    </DetailPage>
  );
};

export default PokemonDetailsPage;
