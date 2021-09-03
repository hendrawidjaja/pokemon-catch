import { gqlQuery } from "../components/PokemonQuerying";

export const LISTACTION = {
  CLOSE: "CLOSE",
  FETCH_DONE: "FETCH DONE",
  FETCH_POKEMON: "FETCH POKEMON",
  RAISE_OFFSET: "RAISE OFFSET",
  REDUCE_OFFSET: "REDUCE OFFSET",
};

/*
const initialState = {
  image: "",
  isLoading: false,
  limit: 20
  offset: 1
  pokemonDetails: "",
  pokemonName: "ditto",
  showDetail: false,
};
 */

const listReducer = (state, action) => {
  /* const limit = state.limit;
  const offset = state.offset;

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
  }; */

  switch (action.type) {
    case LISTACTION.CLOSE: {
      return {
        ...state,
        showDetail: false,
      };
    }

    case LISTACTION.FETCH_DONE: {
      return {
        ...state,
        isLoading: false,
        showDetail: true,
      };
    }

    case LISTACTION.FETCH_POKEMON: {
      return {
        ...state,
        isLoading: true,
        image: action.payload.image,
        name: action.payload.name,
      };
    }

    case LISTACTION.RAISE_OFFSET: {
      return {
        ...state,
        offset: (state.offset += 20),
      };
    }

    case LISTACTION.REDUCE_OFFSET: {
      return {
        ...state,
        offset: state.offset <= 1 ? state.offset : (state.offset -= 20),
      };
    }

    default:
      return state;
  }
};

export default listReducer;
