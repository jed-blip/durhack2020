import React from "react";
import Header from './layout/header';
import './midscore.css'
const wait_time=10000;
const host='http://ec2-35-177-205-141.eu-west-2.compute.amazonaws.com:3080/';


class Midscore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {thisRound: [], total: []};
    }

    componentWillMount() {
        //ask for the answer-user pairs
        // getscore - GET - return {[name]: [[roundscore, totalscore]], ....}
        fetch(host+"getscore", {
            headers:{
                'content-type':'application/json; charset=UTF-8'
            },
            method: 'GET',
            
        })
        .then(data=>{return data.json()})
        .then(res=>{
            var thisRound = []
            for (var key in res) {
                if (res.hasOwnProperty(key)) {
                    thisRound.push([key, res[key][0]]);
                }
            }
            thisRound.sort(function(a, b) {
                return b[1] - a[1];
            });
    
    
            var total = []
            for (var key2 in res) {
                if (res.hasOwnProperty(key2)) {
                    total.push([key2, res[key2][1]]);
                }
            }
            total.sort(function(a, b) {
                return b[1] - a[1];
            });
    
            this.setState({thisRound: thisRound, total: total});
        })
        
       
       
        
        setTimeout(() => {
            this.props.set_game_state("question");
        }, wait_time)
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

        for (var each2 in this.state.total) {
            totalScoreList.push(<div class="item">
                <p className="name-text">{this.state.total[each2][0]}:</p>
                <div className="flex-filler"></div>
                <p className="score-text">{this.state.total[each2][1]}</p>
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