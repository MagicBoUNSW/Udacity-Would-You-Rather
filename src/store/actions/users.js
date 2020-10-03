import {FormActionTypes} from "../constants";

export function listUsers(users){
    return {
        type: FormActionTypes.LIST_USERS,
        users
    }
}

export function add_question (question){
    return {
        type: FormActionTypes.ADD_QUESTION,
        question
    }
}

export function add_answer({verifyUser, questionId , answer})  {
    return {
        type: FormActionTypes.ADD_ANSWER,
        verifyUser,
        questionId,
        answer
    }
}
