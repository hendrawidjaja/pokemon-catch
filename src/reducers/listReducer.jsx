export const LISTACTION = {
  CLOSE: "CLOSE",
  FETCH_DONE: "FETCH DONE",
  FETCH_LIST: "FETCH LIST",
  FETCH_POKEMON: "FETCH POKEMON",
  RAISE_OFFSET: "RAISE OFFSET",
  REDUCE_OFFSET: "REDUCE OFFSET",
  TOGGLE_COLLECTION: "TOGGLE COLLECTION",
};

export const initialListState = {
  image: "",
  isLoadingList: false,
  isLoadingPokemonDetail: false,
  limit: 20,
  name: "ditto",
  offset: 1,
  pokemonDetails: "",
  showDetail: false,
  showCollection: false,
  pokemonList: [],
};

const listReducer = (state, action) => {
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

    case LISTACTION.FETCH_LIST: {
      return {
        ...state,
        pokemonList: action.payload.pokemonList.pokemons,
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

    case LISTACTION.TOGGLE_COLLECTION: {
      return {
        ...state,
        showCollection: !state.showCollection,
      };
    }

    default:
      return state;
  }
};

export default listReducer;
