import React from "react";

import Header from './layout/header';
import './midscore.css'

const host='http://ec2-35-177-205-141.eu-west-2.compute.amazonaws.com:3080/';

class Finalscore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {total: []};
    }

    componentWillMount() {
        //ask for the answer-user pairs
        // getscore - GET - return {[name]: [[roundscore, totalscore]], ....}
        fetch(host+"getfinalscore", {
            headers:{
                'content-type':'application/json; charset=UTF-8'
            },
            method: 'GET',
            
        })
        .then(data=>{return data.json()})
        .then(res=>{
            var total = []
            for (var key2 in res) {
                if (res.hasOwnProperty(key2)) {
                    total.push([key2, res[key2][1]]);
                }
            }
            total.sort(function(a, b) {
                return b[1] - a[1];
            });
    
            this.setState({total: total});
        })
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