import reduxThunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import reducers from "../redux/indexReducer";


export const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
