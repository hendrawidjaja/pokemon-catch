import React, { useState } from "react";
import { IconBack } from "../../assets/IconPack";
import { LISTACTION } from "../../Reducers/listReducer";
import PokemonForm from "../PokemonForm";

import {
  Container,
  DetailPage,
  Dice,
  Img,
  Li,
  Lucky,
  Name,
  PokemonSecure,
  Title,
  ULAbilities,
  ULMoves,
  ULTypes,
  WrapperButtons,
  WrapperImg,
} from "./style";

const PokemonDetailsPage = ({ data, img, dispatchList }) => {
  const [limitMoves] = useState(15);
  const [nameGiven, setNameGiven] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState("Catch'em");
  const [showBeforeForm, setShowBeforeForm] = useState(true);

  /**
   *  handleClickRandom,
   *  if result lower than 0.5, not success
   *  else success
   */
  const handleClickRandom = () => {
    const result = Math.random().toFixed(2);

    if (result < 0.5) {
      setSuccess(false);
      setShowMessage("Try again");
      setTimeout(() => {
        setShowMessage("Catch'em");
      }, 2000);
    } else {
      setSuccess(true);

      setTimeout(() => {
        setShowBeforeForm((prev) => !prev);
      }, 2000);
    }
  };

  const handleBtnBack = () => {
    dispatchList({ type: LISTACTION.CLOSE });
  };

  const handleNameGiven = () => {
    setNameGiven((prev) => !prev);
  };

  return (
    <DetailPage className="pokemon-detail-page">
      <WrapperButtons className="wrapper-buttons">
        <span className="btn-back" onClick={() => handleBtnBack()}>
          <IconBack />
        </span>
      </WrapperButtons>

      <Container data-testid="container" className="container">
        <Name className="name">{data?.name}</Name>
        <WrapperImg className="wrapper-img">
          <Img className="pokemon-img" src={img} alt="pokemon-img" />
        </WrapperImg>

        {data && (
          <>
            <ULAbilities>
              <Title>Abilities:</Title>
              {data?.abilities.map((ability, key) => (
                <Li key={key} className="list-ability">
                  {ability.ability.name}
                </Li>
              ))}
            </ULAbilities>

            <ULMoves>
              <Title>Moves:</Title>
              {data?.moves.map(
                (move, key) =>
                  key < limitMoves && (
                    <Li key={key} className="list-move">
                      {move.move.name}
                    </Li>
                  )
              )}
            </ULMoves>

            <ULTypes data-testid="list-types">
              <Title>Types:</Title>
              {data?.types.map((type, index) => (
                <Li key={index} className="list-type">
                  {type.type.name}
                </Li>
              ))}
            </ULTypes>
          </>
        )}
      </Container>

      {!success ? (
        <Dice onClick={() => handleClickRandom()}>{showMessage}</Dice>
      ) : showBeforeForm ? (
        <Lucky>You are Lucky!</Lucky>
      ) : !nameGiven ? (
        <PokemonForm done={handleNameGiven} data={data} img={img} />
      ) : (
        <PokemonSecure onClick={() => handleBtnBack()}>
          Pokemon added!
        </PokemonSecure>
      )}
    </DetailPage>
  );
};

export default PokemonDetailsPage;
