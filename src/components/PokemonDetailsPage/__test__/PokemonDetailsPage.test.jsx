import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PokemonContextProvider from "../../../contexts/PokemonContext";
import PokemonDetailsPage from "../../PokemonDetailsPage";

describe("PokemonDetailsPage", () => {
  test("Find an accessible element with the certain id", async () => {
    const { debug } = render(
      <PokemonContextProvider value={false}>
        <PokemonDetailsPage />
      </PokemonContextProvider>
    );

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();

    debug();
  });
});
