import { gqlQuery } from "../PokemonQuerying";

const FetchingPokemonList = async (limit, offset) => {
  const res = await fetch("https://graphql-pokeapi.graphcdn.app/", {
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
  }).then((result) => result.json());

  return res;
};

export { FetchingPokemonList };
