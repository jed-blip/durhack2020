import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from '@material-ui/core';

class Home extends React.Component{
    render() {
        return (
            <div>
                <h1>This is the home page! Yay!</h1>
                <p>{this.props.text}</p>
                <Link href="/game" >hello world</Link>
            </div>
        );
    }
}


export default withRouter(Home);