import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page kanji N5", () => {
  test("kanji List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n5/kanji");

    const kanjiList = screen.getByTestId("kanji-list");
    expect(kanjiList).toBeInTheDocument();
  });

  test("Link um", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n5/kanji"
    );

    const n5kanji = screen.getByTestId("kanji-um");
    userEvent.click(n5kanji);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n5/kanji/um")
    );
    const kanjiPage = screen.getByTestId("kanji-page");
    expect(kanjiPage).toBeInTheDocument();
  });
});
