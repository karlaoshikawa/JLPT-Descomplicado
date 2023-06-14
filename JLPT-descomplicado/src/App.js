import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Hiragana from './pages/Hiragana';
import Katakana from './pages/Katakana';
import Caracter from './pages/Caracter';
import AboutJLPT from './pages/AboutJLPT';
import HowToApply from './pages/HowToApply';
// import ExerciseRomaji from './components/ExerciseRomaji';

function App() {
  return (
    <Switch>
      <Route exact path='/'><Home /></Route>
      <Route exact path='/o-que-e-jlpt'><AboutJLPT /></Route>
      <Route exact path='/sobre-o-teste'><HowToApply /></Route>
      <Route exact path='/hiragana'><Hiragana /></Route>
      <Route exact path='/hiragana/:caracter'><Caracter /></Route>
      {/* <Route exact path='/hiragana/exercise-kaku'><ExerciseRomaji /></Route> */}
      <Route exact path='/katakana'><Katakana /></Route>
      <Route exact path='/katakana/:caracter'><Caracter /></Route>
      {/* <Route exact path='/katakana/exercise-kaku'><ExerciseRomaji /></Route> */}
      <Route exact path='/jlpt-n5'><Home /></Route>
      <Route exact path='/jlpt-n4'><Home /></Route>
      <Route exact path='/jlpt-n3'><Home /></Route>
      <Route exact path='/jlpt-n2'><Home /></Route>
      <Route exact path='/jlpt-n1'><Home /></Route>
</Switch>
  );
}

export default App;
