import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page kanji N4", () => {
  test("kanji List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n4/kanji");

    const kanjiList = screen.getByTestId("kanji-list");
    expect(kanjiList).toBeInTheDocument();
  });

  test("Link fazer", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n4/kanji"
    );

    const n4kanji = screen.getByTestId("kanji-fazer");
    userEvent.click(n4kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n4/kanji/fazer")
    );
    const kanjiPage = screen.getByTestId("kanji-page");
    expect(kanjiPage).toBeInTheDocument();
  });
});
