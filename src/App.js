import './App.css';
import Game from './components/game'
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [gameState, setGameState] = useState("login");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Game gameState={gameState} setGameState={setGameState}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

