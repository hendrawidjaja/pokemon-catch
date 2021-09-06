import { v4 as uuidv4 } from "uuid";

export const REDUCERCONSTANT = {
  ADD_POKEMON: "ADD POKEMON",
  RELEASE_POKEMON: "RELEASE POKEMON",
  FETCH_POKEMON: "FETCH POKEMON",
  SHOW_ALL: "SHOW ALL",
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case REDUCERCONSTANT.ADD_POKEMON: {
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

    case REDUCERCONSTANT.RELEASE_POKEMON: {
      return state.filter((pokemon) => pokemon.id !== action.id);
    }

    case REDUCERCONSTANT.SHOW_ALL: {
      return state;
    }

    default:
      return state;
  }
};

export default pokemonReducer;
