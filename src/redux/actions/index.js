import {authRef} from "../../config/firebase";

import {} from "../types";


// Firebase Auth callback
authRef.onAuthStateChanged(user => {

    if (user) {

    } else {

    }

});

export const example = () => dispatch => {

    dispatch({
        type: "KEY",
        payload: null
    });

};
