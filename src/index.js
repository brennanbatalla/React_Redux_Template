import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import axios from 'axios';
import {requestInterceptor} from "./config/axiosConfig";
import {store} from "./config/reduxStore";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {Custom_Theme} from "./config/theme";


axios.interceptors.request.use(requestInterceptor, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={Custom_Theme}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
