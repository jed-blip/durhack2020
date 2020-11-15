import React from "react";
import { withRouter } from "react-router-dom";
import Login from "./login";
import Question from "./question";
import Answers from "./answers";
import MidScore from "./midscore";
import FinalScore from "./finalscore"

class Game extends React.Component {

    render() {

        if (this.props.game_state === "login") {
            return (
                <Login set_game_state={this.props.set_game_state} set_username={this.props.set_username} username={this.props.username}/>
            );
        } else if (this.props.game_state === "question") {
            return (
                <Question username={this.props.username} set_game_state={this.props.set_game_state}/>
            );
        } else if (this.props.game_state === "answers") {
            return (
                <Answers username={this.props.username} set_game_state={this.props.set_game_state}/>
            );
        } else if (this.props.game_state === "mid-score") {
            return (
                <MidScore username={this.props.username} set_game_state={this.props.set_game_state}/>
            );
        } else if (this.props.game_state === "final-score") {
            return (
                <FinalScore username={this.props.username}/>
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