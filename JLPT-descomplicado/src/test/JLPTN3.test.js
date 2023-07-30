import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page JLPT N3", () => {
  test("Kanji Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n3");

    const n3Kanji = screen.getByTestId("link-kanji-ncard");
    userEvent.click(n3Kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n3/kanji")
    );
  })

  test("vocabulary Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n3");

    const n3Vocabulary = screen.getByTestId("link-vocabulary-ncard");
    userEvent.click(n3Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n3/vocabulary")
    );
  });

  test("grammar Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n3");

    const n3Vocabulary = screen.getByTestId("link-grammar-ncard");
    userEvent.click(n3Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n3/grammar")
    );
  });

  test("N1Description Link", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n3");

    const n3Description = screen.getByTestId("link-N3Description");
    expect(n3Description).toBeInTheDocument();
  });
})