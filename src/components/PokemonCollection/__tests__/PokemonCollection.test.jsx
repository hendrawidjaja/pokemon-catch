import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PokemonContextProvider from "../../../contexts/PokemonContext";
import PokemonCollection from "../PokemonCollection";

describe("PokemonCollection", () => {
  test("Find an accessible element with the certain role attributes", async () => {
    const { debug } = render(
      <PokemonContextProvider value={false}>
        <PokemonCollection />
      </PokemonContextProvider>
    );

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();

    const wrapperButtons = screen.getByTestId("wrapper-buttons");
    expect(wrapperButtons).toBeInTheDocument();

    debug();
  });
});
