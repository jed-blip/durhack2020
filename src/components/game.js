import React from "react";
import { withRouter } from "react-router-dom";
import Login from "./login";
import Question from "./question";


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

class Game extends React.Component {

    render() {
        console.log(this.props.game_state);

        if (this.props.game_state === "login") {
            return (
                <Login set_game_state={this.props.set_game_state} set_username={this.props.set_username}/>
            );
        } else if (this.props.game_state === "question") {
            return (
                <Question username={this.props.username}/>
            );
        } else if (this.props.game_state === "answers") {
            return (
                <Answers />
            );
        } else if (this.props.game_state === "mid-score") {
            return (
                <MidScore />
            );
        } else if (this.props.game_state === "final-score") {
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
}

export default withRouter(Game);