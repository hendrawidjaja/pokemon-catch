import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PokemonContextProvider from "../../../contexts/PokemonContext";
import PokemonForm from "../../PokemonForm";

describe("PokemonForm", () => {
  test("Find an accessible element with the certain role attributes", () => {
    const { debug, getByRole } = render(
      <PokemonContextProvider value={false}>
        <PokemonForm />
      </PokemonContextProvider>
    );

    const form = getByRole("form");
    expect(form).toBeInTheDocument();

    debug();
  });
});

describe("Button", () => {
  test("check button submit exist", () => {
    const { getByText } = render(
      <PokemonContextProvider value={false}>
        <PokemonForm />
      </PokemonContextProvider>
    );

    const buttonSubmit = getByText("Submit");
    expect(buttonSubmit).toBeTruthy();
  });
});
