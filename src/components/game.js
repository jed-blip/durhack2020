import React from "react";
import { withRouter } from "react-router-dom";
import Login from "./login"

class Answers extends React.Component {
    componentWillMount() {
        //
    }
}

class MidScore extends React.Component {
    componentWillMount() {
        //
    }
}

class FinalScore extends React.Component {
    componentWillMount() {
        //
    }
}



function to_render(game_state) {
    if (game_state === "login") {
        return (
            <Login set_get_state={this.props.setGameState}/>
        );
    } else if (game_state === "question") {
        return (
            <Question />
        );
    } else if (game_state === "answers") {
        return (
            <Answers />
        );
    } else if (game_state === "mid-score") {
        return (
            <MidScore />
        );
    } else if (game_state === "final-score") {
        return (
            <FinalScore />
        );
    } else {
        return (
            <div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        <to_render game_state={this.props.gameState} set_game_state={this.props.setGameState} />
    }
}

export default withRouter(Game);