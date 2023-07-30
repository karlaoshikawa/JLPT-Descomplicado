import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page vocabulary N5", () => {
  test("vocabulary List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n5/vocabulary");

    const vocabularyList = screen.getByTestId("vocabulary-list");
    expect(vocabularyList).toBeInTheDocument();
  });

  test("Link au", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n5/vocabulary"
    );

    const n5vocabulary = screen.getByTestId("vocabulary-au");
    userEvent.click(n5vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n5/vocabulary/au")
    );
    const vocabularyPage = screen.getByTestId("vocabulary-page");
    expect(vocabularyPage).toBeInTheDocument();
  });
});
