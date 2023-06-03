import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'

function App() {
  return (
    <Switch>
      <Route exact path='/'><Home /></Route>
</Switch>
  );
}

export default App;
