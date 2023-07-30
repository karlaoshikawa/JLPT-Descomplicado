import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page Grammar N4", () => {
  test("Grammar List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n4/grammar");

    const grammarList = screen.getByTestId("grammar-list");
    expect(grammarList).toBeInTheDocument();
  });

  test("Link aida", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n4/grammar"
    );

    const n4Grammar = screen.getByTestId("grammar-aida");
    userEvent.click(n4Grammar);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n4/grammar/aida")
    );
    const grammarPage = screen.getByTestId("grammar-page");
    expect(grammarPage).toBeInTheDocument();
  });
});
