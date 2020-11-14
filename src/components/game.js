import React from "react";
import { withRouter } from "react-router-dom";

class Game extends React.Component{
    render() {
        return <h1>This is the game page!</h1>
    }
}

export default withRouter(Game);