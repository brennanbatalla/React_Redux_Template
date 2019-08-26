import {} from "../types";

let initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case "EXAMPLE_KEY":
            return Object.assign({}, state, {authEmailError: action.payload});
        default:
            return state;
    }
};