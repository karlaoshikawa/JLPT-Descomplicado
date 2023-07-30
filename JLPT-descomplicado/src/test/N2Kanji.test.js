import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page kanji N2", () => {
  test("kanji List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n2/kanji");

    const kanjiList = screen.getByTestId("kanji-list");
    expect(kanjiList).toBeInTheDocument();
  });

  test("Link total", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n2/kanji"
    );

    const n2kanji = screen.getByTestId("kanji-total");
    userEvent.click(n2kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n2/kanji/total")
    );
    const kanjiPage = screen.getByTestId("kanji-page");
    expect(kanjiPage).toBeInTheDocument();
  });
});
