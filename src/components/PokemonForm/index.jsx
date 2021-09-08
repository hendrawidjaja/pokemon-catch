import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { REDUCERCONSTANT } from "../../Reducers/pokemonReducer";

import { IconX } from "../../assets/IconPack";
import { Button } from "../../styles/button";
import { ButtonClear, Form, Input, WrapperInput } from "./style";

const { ADD_POKEMON } = REDUCERCONSTANT;

const PokemonForm = ({ done, data, img }) => {
  const { dispatch } = useContext(PokemonContext);
  const [name, setName] = useState("");

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        if (name !== "") {
          dispatch({ type: ADD_POKEMON, payload: { name, data, img } });
          setName("");
          done();
          event.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [data, dispatch, img, name, done]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_POKEMON, payload: { name, data, img } });
    done();
    setName("");
  };

  return (
    <Form role="form" className="form" onSubmit={handleSubmit}>
      <WrapperInput className="wrapper-input">
        <Input
          className="input-pokemon-name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Named your Pokemon"
          required
          type="text"
          value={name}
        />

        {name && (
          <ButtonClear onClick={() => setName("")} className="wrapper-icon">
            <IconX />
          </ButtonClear>
        )}
      </WrapperInput>

      <Button data-testid="btnSubmit" className="btn-form" type="submit">
        <span>Submit</span>
      </Button>
    </Form>
  );
};

export default PokemonForm;
