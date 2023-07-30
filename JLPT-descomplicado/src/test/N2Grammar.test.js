import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page Grammar N2", () => {
  test("Grammar List", () => {
    renderWithRouterAndRedux(<App />, {}, "/jlpt-n2/grammar");

    const grammarList = screen.getByTestId("grammar-list");
    expect(grammarList).toBeInTheDocument();
  });

  test("Link iyoiyo", async () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {},
      "/jlpt-n2/grammar"
    );

    const n2Grammar = screen.getByTestId("grammar-iyoiyo");
    userEvent.click(n2Grammar);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n2/grammar/iyoiyo")
    );
    const grammarPage = screen.getByTestId("grammar-page");
    expect(grammarPage).toBeInTheDocument();
  });
});
