import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page vocabulary N1", () => {
  test("vocabulary List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n1/vocabulary");

    const vocabularyList = screen.getByTestId("vocabulary-list");
    expect(vocabularyList).toBeInTheDocument();
  });

  test("Link kage", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n1/vocabulary"
    );

    const n1vocabulary = screen.getByTestId("vocabulary-kage");
    userEvent.click(n1vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n1/vocabulary/kage")
    );
    const vocabularyPage = screen.getByTestId("vocabulary-page");
    expect(vocabularyPage).toBeInTheDocument();
  });
});
