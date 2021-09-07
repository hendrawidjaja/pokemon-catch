import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PokemonContextProvider from "../../../contexts/PokemonContext";
import PokemonListPage from "../../PokemonListPage";

describe("PokemonListPage", () => {
  test("Find an accessible element with the certain role attributes", () => {
    const { getByRole } = render(
      <PokemonContextProvider value={false}>
        <PokemonListPage />
      </PokemonContextProvider>
    );

    const containerCards = getByRole("container-cards");
    expect(containerCards).toBeInTheDocument();
  });
});

describe("Buttons", () => {
  test("check button prev exist", () => {
    const { getByText } = render(
      <PokemonContextProvider value={false}>
        <PokemonListPage />
      </PokemonContextProvider>
    );

    const buttonPrev = getByText("Prev");
    expect(buttonPrev).toBeTruthy();

    const buttonNext = getByText("Next");
    expect(buttonNext).toBeTruthy();
  });
});
