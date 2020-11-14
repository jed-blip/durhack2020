import React from "react";
import Waiting from "./waiting";
import Header from './layout/header';
import './midscore.css'

class Finalscore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {total: []};
    }

    componentWillMount() {
        //ask for the answer-user pairs
        var scores = {
            "Alan": [1, 5],
            "Bob": [2, 8],
            "Chris": [3, 3],
            "Jed": [0, 4],
        }

        var total = []
        for (var key in scores) {
            if (scores.hasOwnProperty(key)) {
                total.push([key, scores[key][1]]);
            }
        }
        total.sort(function(a, b) {
            return b[1] - a[1];
        });

        this.setState({total: total});
    }

    render() {

        var totalScoreList = []

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
                    <h1>Leaderboard:</h1>
                    {totalScoreList}
                </div>
            </div>
        )
    }

    
}

export default Finalscore;