import { FormActionTypes} from "../constants";

export const setVerifyUser = (id) => {
    return {
        type: FormActionTypes.SET_VERIFY_USER,
        id
    }
}

export const setlogOut = () => {
    return {
        type: FormActionTypes.LOG_OUT
    }
}
