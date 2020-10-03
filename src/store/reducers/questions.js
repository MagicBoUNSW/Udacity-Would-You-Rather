import {FormActionTypes} from "../constants";

//xu ly cac action question
export default function questions(state = {}, action) {
    switch (action.type) {
        case FormActionTypes.LIST_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case FormActionTypes.ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case FormActionTypes.ADD_ANSWER:
            return {
                ...state,
                [action.questionId] : {
                    ...state[action.questionId],
                    [action.answer]: {
                        ...state[action.questionId][action.answer],
                        votes: state[action.questionId][action.answer].votes.concat([action.verifyUser])
                    }
                }
            }

        default:
            return state;
    }
}
