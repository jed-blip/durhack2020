import React from "react";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = { res: "" };
    }

    componentWillMount() {
        this.state.res = "" //a function
    }
}

export default Login;