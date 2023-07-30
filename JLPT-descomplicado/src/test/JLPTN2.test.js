import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page JLPT N2", () => {
  test("Kanji Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n2");

    const n2Kanji = screen.getByTestId("link-kanji-ncard");
    userEvent.click(n2Kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n2/kanji")
    );
  })

  test("vocabulary Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n2");

    const n2Vocabulary = screen.getByTestId("link-vocabulary-ncard");
    userEvent.click(n2Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n2/vocabulary")
    );
  });

  test("grammar Link", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n2");

    const n2Vocabulary = screen.getByTestId("link-grammar-ncard");
    userEvent.click(n2Vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n2/grammar")
    );
  });

  test("N1Description Link", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n2");

    const n2Description = screen.getByTestId("link-N2Description");
    expect(n2Description).toBeInTheDocument();
  });
})