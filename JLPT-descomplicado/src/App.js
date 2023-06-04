import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Hiragana from './pages/Hiragana';
import Katakana from './pages/Katakana';

function App() {
  return (
    <Switch>
      <Route exact path='/'><Home /></Route>
      <Route exact path='/hiragana'><Hiragana /></Route>
      <Route exact path='/katakana'><Katakana /></Route>
      <Route exact path='/jlpt-n5'><Home /></Route>
      <Route exact path='/jlpt-n4'><Home /></Route>
      <Route exact path='/jlpt-n3'><Home /></Route>
      <Route exact path='/jlpt-n2'><Home /></Route>
      <Route exact path='/jlpt-n1'><Home /></Route>
</Switch>
  );
}

export default App;
