import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Hiragana from "./pages/Hiragana";
import Katakana from "./pages/Katakana";
import Caracter from "./pages/Caracter";
import AboutJLPT from "./pages/AboutJLPT";
import HowToApply from "./pages/HowToApply";
import JLPTN5 from "./pages/JLPTN5";
import JLPTN4 from "./pages/JLPTN4";
import HowToPreparing from "./pages/HowToPreparing";
import N5KanjiList from "./pages/N5KanjiList";
import N5Kanji from "./pages/N5Kanji";
import N4Kanji from "./pages/N4Kanji";
import N5VocabularyList from "./pages/N5VocabularyList";
import N5Vocabulary from "./pages/N5Vocabulary";
import N5GrammarList from "./pages/N5GrammarList";
import N4GrammarList from "./pages/N4GrammarList";
import N5Grammar from "./pages/N5Grammar";
import N4Grammar from "./pages/N4Grammar";
import N4KanjiList from "./pages/N4KanjiList";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/o-que-e-jlpt">
        <AboutJLPT />
      </Route>
      <Route exact path="/sobre-o-teste">
        <HowToApply />
      </Route>
      <Route exact path="/como-se-preparar">
        <HowToPreparing />
      </Route>
      <Route exact path="/hiragana">
        <Hiragana />
      </Route>
      <Route exact path="/hiragana/:caracter">
        <Caracter />
      </Route>
      {/* <Route exact path='/hiragana/exercise-kaku'><ExerciseRomaji /></Route> */}
      <Route exact path="/katakana">
        <Katakana />
      </Route>
      <Route exact path="/katakana/:caracter">
        <Caracter />
      </Route>
      {/* <Route exact path='/katakana/exercise-kaku'><ExerciseRomaji /></Route> */}
      <Route exact path="/jlpt-n5">
        <JLPTN5 />
      </Route>
      <Route exact path="/jlpt-n4">
        <JLPTN4 />
      </Route>
      <Route exact path="/jlpt-n5/kanji">
        <N5KanjiList />
      </Route>
      <Route exact path="/jlpt-n4/kanji">
        <N4KanjiList />
      </Route>
      <Route exact path="/jlpt-n5/kanji/:kanji">
        <N5Kanji />
      </Route>
      <Route exact path="/jlpt-n4/kanji/:kanji">
        <N4Kanji />
      </Route>
      <Route exact path="/jlpt-n5/vocabulary">
        <N5VocabularyList />
      </Route>
      <Route exact path="/jlpt-n5/vocabulary/:vocabulary">
        <N5Vocabulary />
      </Route>
      <Route exact path="/jlpt-n5/grammar">
        <N5GrammarList />
      </Route>
      <Route exact path="/jlpt-n4/grammar">
        <N4GrammarList />
      </Route>
      <Route exact path="/jlpt-n5/grammar/:grammar">
        <N5Grammar />
      </Route>
      <Route exact path="/jlpt-n4/grammar/:grammar">
        <N4Grammar />
      </Route>
      <Route exact path="/jlpt-n4">
        <Home />
      </Route>
      <Route exact path="/jlpt-n3">
        <Home />
      </Route>
      <Route exact path="/jlpt-n2">
        <Home />
      </Route>
      <Route exact path="/jlpt-n1">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
