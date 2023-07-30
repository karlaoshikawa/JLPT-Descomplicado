import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page vocabulary N2", () => {
  test("vocabulary List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n2/vocabulary");

    const vocabularyList = screen.getByTestId("vocabulary-list");
    expect(vocabularyList).toBeInTheDocument();
  });

  test("Link anshin", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n2/vocabulary"
    );

    const n2vocabulary = screen.getByTestId("vocabulary-anshin");
    userEvent.click(n2vocabulary);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n2/vocabulary/anshin")
    );
    const vocabularyPage = screen.getByTestId("vocabulary-page");
    expect(vocabularyPage).toBeInTheDocument();
  });
});
