import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWithRouterAndRedux";
import App from "../App";

window.scrollTo = jest.fn();

describe("Home Page Tests", () => {
  test("Header links", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const imageLogo = screen.getByTestId("link-to-home");
    userEvent.click(imageLogo);
    await waitFor(() => expect(history.location.pathname).toBe("/"));

    const linkHiragana = screen.getByTestId("link-to-hiragana");
    userEvent.click(linkHiragana);
    await waitFor(() => expect(history.location.pathname).toBe("/hiragana"));

    const linkKatakana = screen.getByTestId("link-to-katakana");
    userEvent.click(linkKatakana);
    await waitFor(() => expect(history.location.pathname).toBe("/katakana"));

    const linkN5 = screen.getByTestId("link-to-n5");
    userEvent.click(linkN5);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n5"));

    const linkN4 = screen.getByTestId("link-to-n4");
    userEvent.click(linkN4);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n4"));

    const linkN3 = screen.getByTestId("link-to-n3");
    userEvent.click(linkN3);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n3"));

    const linkN2 = screen.getByTestId("link-to-n2");
    userEvent.click(linkN2);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n2"));

    const linkN1 = screen.getByTestId("link-to-n1");
    userEvent.click(linkN1);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n1"));
  });

  test("Home links Bar", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const linkOqJLPT = screen.getByTestId("link-oq-jlpt");
    userEvent.click(linkOqJLPT);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/o-que-e-jlpt")
    );

    const linkSobreTeste = screen.getByText("Sobre o teste");
    userEvent.click(linkSobreTeste);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/sobre-o-teste")
    );

    const linkPreparar = screen.getByText("Como se preparar");
    userEvent.click(linkPreparar);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/como-se-preparar")
    );
  });

  test("First steps links", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const fsHiragana = screen.getByTestId("link-hiragana-fsteps");
    userEvent.click(fsHiragana);
    await waitFor(() => expect(history.location.pathname).toBe("/hiragana"));
  });

  test("First steps katakana links", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const fskatakana = screen.getByTestId("link-katakana-fsteps");
    userEvent.click(fskatakana);
    await waitFor(() => expect(history.location.pathname).toBe("/katakana"));
  });

  test("First steps JLPTN5 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const fsjlptn5 = screen.getByTestId("link-jlptn5-fsteps");
    userEvent.click(fsjlptn5);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n5"));
  });

  test("First steps JLPTN4 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const fsjlptn4 = screen.getByTestId("link-jlptn4-fsteps");
    userEvent.click(fsjlptn4);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n4"));
  });

  test("First steps JLPTN3 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const fsjlptn3 = screen.getByTestId("link-jlptn3-fsteps");
    userEvent.click(fsjlptn3);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n3"));
  });

  test("First steps JLPTN2 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const fsjlptn2 = screen.getByTestId("link-jlptn2-fsteps");
    userEvent.click(fsjlptn2);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n2"));
  });

  test("First steps JLPTN1 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const fsjlptn1 = screen.getByTestId("link-jlptn1-fsteps");
    userEvent.click(fsjlptn1);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n1"));
  });

  test("Footer logo link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const logoLinkFooter = screen.getByTestId("link-to-home-footer");
    userEvent.click(logoLinkFooter);
    await waitFor(() => expect(history.location.pathname).toBe("/"));
  });

  test("Footer Instagram link", async () => {
    renderWithRouterAndRedux(<App />);

    const instaLinkFooter = screen.getByTestId("link-instagram-footer");
    userEvent.click(instaLinkFooter);
    await waitFor(() =>
      expect(instaLinkFooter).toHaveAttribute(
        "href",
        "https://www.instagram.com/jlpt_descomplicado/"
      )
    );
  });

  test("Footer Hiragana link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerHiragana = screen.getByTestId("link-to-hiragana-footer");
    userEvent.click(footerHiragana);
    await waitFor(() => expect(history.location.pathname).toBe("/hiragana"));
  });

  test("Footer Katakana link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerKatakana = screen.getByTestId("link-to-katakana-footer");
    userEvent.click(footerKatakana);
    await waitFor(() => expect(history.location.pathname).toBe("/katakana"));
  });

  test("Footer JLPTN5 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerjlptn5 = screen.getByTestId("link-to-n5-footer");
    userEvent.click(footerjlptn5);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n5"));
  });

  test("Footer JLPTN4 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerjlptn4 = screen.getByTestId("link-to-n4-footer");
    userEvent.click(footerjlptn4);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n4"));
  });

  test("Footer JLPTN3 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerjlptn3 = screen.getByTestId("link-to-n3-footer");
    userEvent.click(footerjlptn3);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n3"));
  });

  test("Footer JLPTN2 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerjlptn2 = screen.getByTestId("link-to-n2-footer");
    userEvent.click(footerjlptn2);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n2"));
  });

  test("Footer JLPTN1 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerjlptn1 = screen.getByTestId("link-to-n1-footer");
    userEvent.click(footerjlptn1);
    await waitFor(() => expect(history.location.pathname).toBe("/jlpt-n1"));
  });

  test("Footer Kanji JLPTN5 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerKanjiN5 = screen.getByTestId("link-kanji-n5-footer");
    userEvent.click(footerKanjiN5);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n5/kanji")
    );
  });

  test("Footer Kanji JLPTN4 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerKanjiN4 = screen.getByTestId("link-kanji-n4-footer");
    userEvent.click(footerKanjiN4);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n4/kanji")
    );
  });

  test("Footer Kanji JLPTN3 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerKanjiN3 = screen.getByTestId("link-kanji-n3-footer");
    userEvent.click(footerKanjiN3);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n3/kanji")
    );
  });

  test("Footer Kanji JLPTN2 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerKanjiN2 = screen.getByTestId("link-kanji-n2-footer");
    userEvent.click(footerKanjiN2);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n2/kanji")
    );
  });

  test("Footer Kanji JLPTN1 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerKanjiN1 = screen.getByTestId("link-kanji-n1-footer");
    userEvent.click(footerKanjiN1);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n1/kanji")
    );
  });

  test("Footer Vocabuary JLPTN5 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerVocabN5 = screen.getByTestId("link-vocabulary-n5-footer");
    userEvent.click(footerVocabN5);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n5/vocabulary")
    );
  });

  test("Footer Vocabuary JLPTN4 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerVocabN4 = screen.getByTestId("link-vocabulary-n4-footer");
    userEvent.click(footerVocabN4);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n4/vocabulary")
    );
  });

  test("Footer Vocabuary JLPTN3 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerVocabN3 = screen.getByTestId("link-vocabulary-n3-footer");
    userEvent.click(footerVocabN3);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n3/vocabulary")
    );
  });

  test("Footer Vocabuary JLPTN2 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerVocabN2 = screen.getByTestId("link-vocabulary-n2-footer");
    userEvent.click(footerVocabN2);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n2/vocabulary")
    );
  });

  test("Footer Vocabuary JLPTN1 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerVocabN1 = screen.getByTestId("link-vocabulary-n1-footer");
    userEvent.click(footerVocabN1);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n1/vocabulary")
    );
  });

  test("Footer Grammar JLPTN5 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerGrammarN5 = screen.getByTestId("link-grammar-n5-footer");
    userEvent.click(footerGrammarN5);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n5/grammar")
    );
  });

  test("Footer Grammar JLPTN4 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerGrammarN4 = screen.getByTestId("link-grammar-n4-footer");
    userEvent.click(footerGrammarN4);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n4/grammar")
    );
  });

  test("Footer Grammar JLPTN3 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerGrammarN3 = screen.getByTestId("link-grammar-n3-footer");
    userEvent.click(footerGrammarN3);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n3/grammar")
    );
  });

  test("Footer Grammar JLPTN2 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerGrammarN2 = screen.getByTestId("link-grammar-n2-footer");
    userEvent.click(footerGrammarN2);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n2/grammar")
    );
  });

  test("Footer Grammar JLPTN1 link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerGrammarN1 = screen.getByTestId("link-grammar-n1-footer");
    userEvent.click(footerGrammarN1);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/jlpt-n1/grammar")
    );
  });

  test("Footer O que é JLPT link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerOqJLPT = screen.getByTestId("link-oq-jlpt-footer");
    userEvent.click(footerOqJLPT);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/o-que-e-jlpt")
    );
  });

  test("Footer Sobre o Teste link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerSobreJLPT = screen.getByTestId("link-sobre-teste-footer");
    userEvent.click(footerSobreJLPT);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/sobre-o-teste")
    );
  });

  test("Footer Como se preparar link", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const footerSobreJLPT = screen.getByTestId("link-como-preparar-footer");
    userEvent.click(footerSobreJLPT);
    await waitFor(() =>
      expect(history.location.pathname).toBe("/como-se-preparar")
    );
  });
});
