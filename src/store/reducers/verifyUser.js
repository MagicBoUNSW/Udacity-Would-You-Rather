import FormActionTypes from "../constants";

export default function verifyUser (state = null,action){
    switch (action.type) {
        case FormActionTypes.SET_VERIFY_USER :
            return action.id
        case FormActionTypes.LOG_OUT :
            return null
        default:
            return state
    }
}
