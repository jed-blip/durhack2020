import React from "react";
import Waiting from "./waiting";
import Header from './layout/header';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {answers: '', names: []};
    }

    componentWillMount() {
        //ask for the answer-user pairs
        this.setState({answers: {
            "Alan": "Answer 1",
            "Bob": "Answer 3",
            "Chris": "Answer 2"
        }})

        for (var key in this.state.answers) {
            if (this.state.answers.hasOwnProperty(key)) {
                this.state.name.push(key);
            }
        }
    }

    render() {
        return (
            <label>
                {this.state.answers[this.state.names[0]]}
                <select>
                    <option value={this.state.names[0]}>{this.state.names[0]}</option>
                    <option value={this.state.names[1]}>{this.state.names[1]}</option>
                    <option value={this.state.names[1]}>{this.state.names[1]}</option>
                </select>
            </label>
        )
    }

    
}

export default Answers;