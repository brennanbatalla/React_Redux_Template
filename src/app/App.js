import React, {Component} from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {connect} from "react-redux";
import HomePage from "../containers/HomePage/HomePage";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <Router>
                <div id="switchContainer">
                    <Switch>
                        <Route exact path={ROUTES.HOME_ROUTE} component={HomePage}/>
                        <Route component={HomePage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

function mapStateToProps({}) {
    return {};
}

export default connect(mapStateToProps, {})(App);
