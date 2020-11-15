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
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="main-container">
            <div className="filler">
            </div>
              <div className="mid-container">
                <Game game_state={gameState} set_game_state={setGameState} username={username} set_username={setUsername}/>
              </div>
            <div className="filler">
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

