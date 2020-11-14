import React from "react";

class Question extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = { res: "" };
    }

    componentWillMount() {
        this.state.res = "" //a function
    }*/

    render() {
        return(
            <div>
                <h1>{this.props.username}</h1>
            </div>
        );
    }

    
}

export default Question;