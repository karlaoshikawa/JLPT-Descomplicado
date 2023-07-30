import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page vocabulary N3", () => {
  test("vocabulary List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n3/vocabulary");

    const vocabularyList = screen.getByTestId("vocabulary-list");
    expect(vocabularyList).toBeInTheDocument();
  });

  test("Link ainiku", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n3/vocabulary"
    );

    const n3vocabulary = screen.getByTestId("vocabulary-ainiku");
    userEvent.click(n3vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n3/vocabulary/ainiku")
    );
    const vocabularyPage = screen.getByTestId("vocabulary-page");
    expect(vocabularyPage).toBeInTheDocument();
  });
});
