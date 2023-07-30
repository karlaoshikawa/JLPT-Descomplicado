import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page JLPT N5", () => {
  test("Kanji Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n5");

    const n5Kanji = screen.getByTestId("link-kanji-ncard");
    userEvent.click(n5Kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n5/kanji")
    );
  });

  test("vocabulary Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n5");

    const n5Vocabulary = screen.getByTestId("link-vocabulary-ncard");
    userEvent.click(n5Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n5/vocabulary")
    );
  });

  test("grammar Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n5");

    const n4Vocabulary = screen.getByTestId("link-grammar-ncard");
    userEvent.click(n4Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n5/grammar")
    );
  });

  test("N1Description Link", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n5");

    const n5Description = screen.getByTestId("link-N5Description");
    expect(n5Description).toBeInTheDocument();
  });
});
