import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page kanji N1", () => {
  test("kanji List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n1/kanji");

    const kanjiList = screen.getByTestId("kanji-list");
    expect(kanjiList).toBeInTheDocument();
  });

  test("Link pinheiro", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/jlpt-n1/kanji");

    const n1kanji = screen.getByTestId("kanji-pinheiro");
    userEvent.click(n1kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n1/kanji/pinheiro")
    );
    const kanjiPage = screen.getByTestId("kanji-page");
    expect(kanjiPage).toBeInTheDocument();
  });
});
