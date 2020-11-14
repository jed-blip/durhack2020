import React from "react";
import Waiting from "./waiting";
import Header from './layout/header';
import './question.css'

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = { question: "Lorem ipsum?", value: "", waiting: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({question: this.state.question, value: event.target.value, waiting: false});
    }

    handleSubmit(event) {
        //send to backend
        this.setState({question: this.state.question, value: this.state.value, waiting: true});
        this.props.set_game_state("answers");
        event.preventDefault();
    }

    /*componentWillMount() {
        this.state.res = "" //a function
    }*/

    render() {
        if (this.state.question === "") {
            this.props.set_game_state("final-score")
        }

        if (this.state.waiting === false) {
            return(
                <div>
                    <Header />
                    <h1 className="question-text">{this.state.question}</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label>
                            Answer:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input className="submit-button" type="submit" value="Submit" />
                    </form> 
                </div>
            );
        } else {
            return (
                <Waiting username={this.props.username}/>
            )
        }
    }

    
}

export default Question;