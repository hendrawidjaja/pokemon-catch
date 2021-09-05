import React, { useContext, useState } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { REDUCERCONSTANT } from "../../Constant/constantReducer";
import { IconX } from "../../assets/IconPack";

import { Button } from "../../styles/button";
import { ButtonClear, Form, Input, WrapperInput } from "./style";

const { ADD_POKEMON } = REDUCERCONSTANT;

const PokemonForm = ({ done, data, img }) => {
  const { dispatchForm } = useContext(PokemonContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchForm({ type: ADD_POKEMON, payload: { name, data, img } });
    done();
    setName("");
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
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
          <ButtonClear onClick={() => handleClear()} className="wrapper-icon">
            <IconX />
          </ButtonClear>
        )}
      </WrapperInput>

      <Button className="btn-form" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default PokemonForm;
