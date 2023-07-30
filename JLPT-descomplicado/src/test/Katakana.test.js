import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page Katakana list", () => {
  test("Katakana List", async () => {
    renderWithRouterAndRedux(<App />, {}, "/katakana");

    const katakanaList = screen.getByTestId("table-katakana-undefined-list");
    expect(katakanaList).toBeInTheDocument();
  });

  test("Katakana click A", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/katakana");

    const katakanaA = screen.getByTestId("table-katakana-a");
    expect(katakanaA).toBeInTheDocument();
    userEvent.click(katakanaA);
    await waitFor(() => expect(history.location.pathname).toBe("/katakana/a"));

    const katakanaCharA = screen.getByTestId("caracter");
    expect(katakanaCharA).toBeInTheDocument();
  });

  test("Katakana Dakuon List", async () => {
    renderWithRouterAndRedux(<App />, {}, "/katakana");

    const hiraganaDakuon = screen.getByTestId("table-katakana-Dakuon-list");
    expect(hiraganaDakuon).toBeInTheDocument();
  });

  test("Katakana Dakuon click ga", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/katakana");

    const katakanaGA = screen.getByTestId("table-katakana-ga");
    expect(katakanaGA).toBeInTheDocument();
    userEvent.click(katakanaGA);
    await waitFor(() => expect(history.location.pathname).toBe("/katakana/ga"));

    const katakanaCharGA = screen.getByTestId("caracter");
    expect(katakanaCharGA).toBeInTheDocument();
  });

  test("Katakana Yoon List", async () => {
    renderWithRouterAndRedux(<App />, {}, "/katakana");

    const hiraganaYoon = screen.getByTestId("table-katakana-Yoon-list");
    expect(hiraganaYoon).toBeInTheDocument();
  });

  test("Katakana Yoon click kya", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/katakana");

    const katakanaKYA = screen.getByTestId("table-katakana-kya");
    expect(katakanaKYA).toBeInTheDocument();
    userEvent.click(katakanaKYA);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/katakana/kya")
    );

    const katakanaCharKYA = screen.getByTestId("caracter");
    expect(katakanaCharKYA).toBeInTheDocument();
  });
});
