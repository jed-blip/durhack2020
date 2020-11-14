import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component{
    render() {
        return (
            <div>
                <h1>This is the home page! Yay!</h1>
                <p>{this.props.text}</p>
            </div>
        );
    }
}


export default withRouter(Home);