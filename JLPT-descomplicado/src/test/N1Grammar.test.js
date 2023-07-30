import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page Grammar N1", () => {
  test("Grammar List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n1/grammar");

    const grammarList = screen.getByTestId("grammar-list");
    expect(grammarList).toBeInTheDocument();
  });

  test("Link iwayuru", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n1/grammar"
    );

    const n1Grammar = screen.getByTestId("grammar-iwayuru");
    userEvent.click(n1Grammar);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n1/grammar/iwayuru")
    );
    const grammarPage = screen.getByTestId("grammar-page");
    expect(grammarPage).toBeInTheDocument();
  });
});
