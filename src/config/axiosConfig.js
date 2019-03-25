import {authRef} from "./firebase";
import {BASE_API} from "../constants/constants";


export const requestInterceptor = (config) => {

    if (!config.url.includes(BASE_API)) {
        return config;
    }

    return authRef.currentUser.getIdToken(false)
        .then((id) => {
            config.headers["Authorization"] = "Bearer " + id;
            return config;
        });

};



