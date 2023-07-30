import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page vocabulary N4", () => {
  test("vocabulary List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n4/vocabulary");

    const vocabularyList = screen.getByTestId("vocabulary-list");
    expect(vocabularyList).toBeInTheDocument();
  });

  test("Link arukooru", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n4/vocabulary"
    );

    const n4vocabulary = screen.getByTestId("vocabulary-arukooru");
    userEvent.click(n4vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n4/vocabulary/arukooru")
    );
    const vocabularyPage = screen.getByTestId("vocabulary-page");
    expect(vocabularyPage).toBeInTheDocument();
  });
});
