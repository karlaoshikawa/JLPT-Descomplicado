import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page Grammar N3", () => {
  test("Grammar List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n3/grammar");

    const grammarList = screen.getByTestId("grammar-list");
    expect(grammarList).toBeInTheDocument();
  });

  test("Link ageru", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n3/grammar"
    );

    const n3Grammar = screen.getByTestId("grammar-ageru");
    userEvent.click(n3Grammar);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n3/grammar/ageru")
    );
    const grammarPage = screen.getByTestId("grammar-page");
    expect(grammarPage).toBeInTheDocument();
  });
});
