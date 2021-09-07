import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PokemonContextProvider from "../PokemonContext";
import PokemonListPage from "../../components/PokemonListPage";

describe("PokemonListPage", () => {
  test("Find an accessible element with the certain id", () => {
    const contextValue = { handleFilter: () => {} };
    const wrapper = ({ children }) => (
      <PokemonContextProvider value={contextValue}>
        {children}
      </PokemonContextProvider>
    );

    render(<PokemonListPage />, { wrapper });

    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
});
