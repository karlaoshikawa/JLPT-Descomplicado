import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page Grammar N5", () => {
  test("Grammar List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n5/grammar");

    const grammarList = screen.getByTestId("grammar-list");
    expect(grammarList).toBeInTheDocument();
  });

  test("Link itsumo", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n5/grammar"
    );

    const n4Grammar = screen.getByTestId("grammar-itsumo");
    userEvent.click(n4Grammar);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n5/grammar/itsumo")
    );
    const grammarPage = screen.getByTestId("grammar-page");
    expect(grammarPage).toBeInTheDocument();
  });
});
