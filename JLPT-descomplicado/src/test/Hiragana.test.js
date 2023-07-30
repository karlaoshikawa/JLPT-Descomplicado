import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

describe("Test Page Hiragana list", () => {
  test("Hiragana List", async () => {
    renderWithRouterAndRedux(<App />, {}, "/hiragana");

    const hiraganaList = screen.getByTestId("table-hiragana-undefined-list");
    expect(hiraganaList).toBeInTheDocument();
  });

  test("Hiragana click A", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/hiragana");

    const hiraganaA = screen.getByTestId("table-hiragana-a");
    expect(hiraganaA).toBeInTheDocument();
    userEvent.click(hiraganaA);
    await waitFor(() => expect(history.location.pathname).toBe("/hiragana/a"));

    const hiraganaCharA = screen.getByTestId("caracter");
    expect(hiraganaCharA).toBeInTheDocument();
  });

  test("Hiragana Dakuon List", async () => {
    renderWithRouterAndRedux(<App />, {}, "/hiragana");

    const hiraganaDakuon = screen.getByTestId("table-hiragana-Dakuon-list");
    expect(hiraganaDakuon).toBeInTheDocument();
  });

  test("Hiragana Dakuon click ga", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/hiragana");

    const hiraganaGA = screen.getByTestId("table-hiragana-ga");
    expect(hiraganaGA).toBeInTheDocument();
    userEvent.click(hiraganaGA);
    await waitFor(() => expect(history.location.pathname).toBe("/hiragana/ga"));
  
  const hiraganaCharGA = screen.getByTestId("caracter");
  expect(hiraganaCharGA).toBeInTheDocument();
  });

  test("Hiragana Yoon List", async () => {
    renderWithRouterAndRedux(<App />, {}, "/hiragana");

    const hiraganaYoon = screen.getByTestId("table-hiragana-Yoon-list");
    expect(hiraganaYoon).toBeInTheDocument();
  });

  test("Hiragana Yoon click kya", async () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, "/hiragana");

    const hiraganaKYA = screen.getByTestId("table-hiragana-kya");
    expect(hiraganaKYA).toBeInTheDocument();
    userEvent.click(hiraganaKYA);
    await waitFor(() => expect(history.location.pathname).toBe("/hiragana/kya"));

    const hiraganaCharKYA = screen.getByTestId("caracter");
    expect(hiraganaCharKYA).toBeInTheDocument();
  });
});
