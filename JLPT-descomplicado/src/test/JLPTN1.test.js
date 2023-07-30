import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page JLPT N1", () => {
  test("Kanji Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n1");

    const n1Kanji = screen.getByTestId("link-kanji-ncard");
    userEvent.click(n1Kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n1/kanji")
    );
  })

  test("vocabulary Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n1");

    const n1Vocabulary = screen.getByTestId("link-vocabulary-ncard");
    userEvent.click(n1Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n1/vocabulary")
    );
  });

  test("grammar Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n1");

    const n1Vocabulary = screen.getByTestId("link-grammar-ncard");
    userEvent.click(n1Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n1/grammar")
    );
  });

  test("N1Description Link", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n1");

    const n1Description = screen.getByTestId("link-N1Description");
    expect(n1Description).toBeInTheDocument();
  });
})