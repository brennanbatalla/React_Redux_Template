import React, {Component} from 'react';
import {connect} from "react-redux";

class HomePage extends Component {

    state = {};

    componentDidMount() {}

    render() {

        return (
            <div id="HomePage">

                Hello world

            </div>
        );
    }
}

function mapStateToProps({}) {
    return {};
}

export default connect(mapStateToProps, {})(HomePage);
