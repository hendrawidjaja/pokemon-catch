import { v4 as uuidv4 } from "uuid";

import { REDUCERCONSTANT } from "../Constant/constantReducer";
const { ADD_POKEMON, RELEASE_POKEMON } = REDUCERCONSTANT;

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case ADD_POKEMON: {
      return [
        ...state,
        {
          name: action.payload.name,
          data: action.payload.data,
          img: action.payload.img,
          id: uuidv4(),
        },
      ];
    }

    case RELEASE_POKEMON: {
      return state.filter((pokemon) => pokemon.id !== action.id);
    }

    default:
      return state;
  }
};

export default pokemonReducer;
