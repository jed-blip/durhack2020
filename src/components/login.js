import { supportsHistory } from "history/DOMUtils";
import React from "react";
import Header from './layout/header';

class Login extends React.Component {
    /*componentWillMount() {
        setInterval(() => {
            fetch("http://localhost:3080/ready").then(res => {
                if (res.areWeDone === "true") {
                    this.props.set_game_state("question");
                }
            })
        }, 500)
    }*/

    render() {
        return (
            <div>
                <Header />
            </div>
    )
    }
}

export default Login;