import reduxThunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import reducers from "../redux/reducers";


export const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
