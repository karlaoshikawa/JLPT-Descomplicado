import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page kanji N3", () => {
  test("kanji List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n3/kanji");

    const kanjiList = screen.getByTestId("kanji-list");
    expect(kanjiList).toBeInTheDocument();
  });

  test("Link povo", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n3/kanji"
    );

    const n3kanji = screen.getByTestId("kanji-povo");
    userEvent.click(n3kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n3/kanji/povo")
    );
    const kanjiPage = screen.getByTestId("kanji-page");
    expect(kanjiPage).toBeInTheDocument();
  });
});
