import { Redirect, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Hiragana from "./pages/Hiragana";
import HiraKanaExercises from "./pages/HiraKanaExercises";
import Caracter from "./pages/Caracter";
import AboutJLPT from "./pages/AboutJLPT";
import HowToApply from "./pages/HowToApply";
import HowToPreparing from "./pages/HowToPreparing";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import NKanji from "./pages/NKanji";
import NKanjiExercise from "./pages/NKanjiExercise";
import NKanjiVocabulary from "./pages/NVocabularyExercise";
import NVocabularyList from "./pages/NVocabularyList";
import NVocabulary from "./pages/NVocabulary";
import NGrammarList from "./pages/NGrammarList";
import NGrammarExercise from "./pages/NGrammarExercise";
import NGrammar from "./pages/NGrammar";
import NKanjiList from "./pages/NKanjiList";
import JLPTN from "./pages/JLPTN";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Switch>
      <Route exact path="/o-que-e-jlpt">
        <AboutJLPT />
      </Route>

      <Route exact path="/sobre-o-teste">
        <HowToApply />
      </Route>

      <Route exact path="/como-se-preparar">
        <HowToPreparing />
      </Route>

      <Route exact path="/politica-de-privacidade">
        <PoliticaDePrivacidade />
      </Route>

      <Route exact path="/sobre-nos">
        <AboutUs />
      </Route>

      <Route exact path="/jlpt/:nlevel/kanji/exercises">
        <NKanjiExercise />
      </Route>

      <Route exact path="/jlpt/:nlevel/kanji/:index/:kanjiCaracter">
        <NKanji />
      </Route>

      <Route exact path="/jlpt/:nlevel/kanji">
        <NKanjiList />
      </Route>

      <Route exact path="/jlpt/:nlevel/grammar/exercises">
        <NGrammarExercise />
      </Route>

      <Route exact path="/jlpt/:nlevel/grammar/:index/:grammarTopic">
        <NGrammar />
      </Route>

      <Route exact path="/jlpt/:nlevel/grammar">
        <NGrammarList />
      </Route>

      <Route exact path="/jlpt/:nlevel/vocabulary/exercises">
        <NKanjiVocabulary />
      </Route>

      <Route exact path="/jlpt/:nlevel/vocabulary/:index/:vocabularyTopic">
        <NVocabulary />
      </Route>

      <Route exact path="/jlpt/:nlevel/vocabulary">
        <NVocabularyList />
      </Route>

      <Route exact path="/jlpt/:NLevel">
        <JLPTN />
      </Route>

      <Route exact path="/:hiraOrKatakana/exercises">
        <HiraKanaExercises />
      </Route>

      <Route exact path="/:hiraOrKatakana/:tipo/:index/:caracter">
        <Caracter />
      </Route>

      <Route exact path="/:hiraOrKatakana">
        <Hiragana />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
