import React from "react";
import PokemonContextProvider from "./contexts/PokemonContext";

import { GCOLOR } from "./styles/globalStyle";
import { Global, css } from "@emotion/react";
import PokemonListPage from "./components/PokemonListPage";

const GlobalStyles = css`
  * {
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  :root {
    --screen-max-width: 1080px;
  }

  h1,
  h2,
  p {
    color: ${GCOLOR.TERTIER};
    margin-block-start: 0;
    margin-block-end: 0;
  }

  ul {
    margin: 0;
    padding-inline-start: 0;
  }

  input,
  button {
    border: 0;
    border-radius: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  .dflex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-row {
    flex-direction: row;
  }
`;

function App() {
  return (
    <div className="App">
      <PokemonContextProvider>
        <Global styles={GlobalStyles} />
        <PokemonListPage />
      </PokemonContextProvider>
    </div>
  );
}

export default App;
