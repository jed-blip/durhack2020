import React from "react";
import Waiting from "./waiting";
import Header from './layout/header';
import './midscore.css'

class Midscore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {thisRound: [], total: []};
    }

    componentWillMount() {
        //ask for the answer-user pairs
        var scores = {
            "Alan": [1, 5],
            "Bob": [2, 8],
            "Chris": [3, 3],
            "Jed": [0, 4],
        }

        var thisRound = []
        for (var key in scores) {
            if (scores.hasOwnProperty(key)) {
                thisRound.push([key, scores[key][0]]);
            }
        }
        thisRound.sort(function(a, b) {
            return b[1] - a[1];
        });


        var total = []
        for (var key in scores) {
            if (scores.hasOwnProperty(key)) {
                total.push([key, scores[key][1]]);
            }
        }
        total.sort(function(a, b) {
            return b[1] - a[1];
        });

        this.setState({thisRound: thisRound, total: total});
        
        setTimeout(() => {
            this.props.set_game_state("question");
        }, 5000)
    }

    render() {

        console.log(this.state)

        var scoreList = []
        var totalScoreList = []

        for (var each in this.state.thisRound) {
            scoreList.push(<div class="item">
                <p className="name-text">{this.state.thisRound[each][0]}:</p>
                <div className="flex-filler"></div>
                <p className="score-text">{this.state.thisRound[each][1]}</p>
            </div>)
        }

        for (var each in this.state.total) {
            totalScoreList.push(<div class="item">
                <p className="name-text">{this.state.total[each][0]}:</p>
                <div className="flex-filler"></div>
                <p className="score-text">{this.state.total[each][1]}</p>
            </div>)
        }

        return (
            <div className="contain">
                <Header />
                <div className="leaderboard-container">
                    <h1>Scores for this round:</h1>
                    {scoreList}
                </div>
                <div className="leaderboard-container">
                    <h1>Leaderboard:</h1>
                    {totalScoreList}
                </div>
            </div>
        )
    }

    
}

export default Midscore;