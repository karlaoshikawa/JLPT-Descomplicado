import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page JLPT N4", () => {
  test("Kanji Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n4");

    const n4Kanji = screen.getByTestId("link-kanji-ncard");
    userEvent.click(n4Kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n4/kanji")
    );
  });

  test("vocabulary Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n4");

    const n4Vocabulary = screen.getByTestId("link-vocabulary-ncard");
    userEvent.click(n4Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n4/vocabulary")
    );
  });

  test("grammar Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n4");

    const n4Vocabulary = screen.getByTestId("link-grammar-ncard");
    userEvent.click(n4Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n4/grammar")
    );
  });

  test("N4Description Link", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n4");

    const n4Description = screen.getByTestId("link-N4Description");
    expect(n4Description).toBeInTheDocument();
  });
});
