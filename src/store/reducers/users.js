import FormActionTypes from "../constants";

export default function users(state = {},action){
    switch (action.type) {
        case FormActionTypes.LIST_USERS :
            return {
                ...state,
                ...action.users
            }
        case FormActionTypes.ADD_QUESTION :
            return {
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        case FormActionTypes.ADD_ANSWER :
            return {
                ...state,
                [action.verifyUser] : {
                    ...state[action.verifyUser],
                    answers: {
                        ...state[action.verifyUser].answers,
                        [action.questionId]:action.answers
                    }
                }
            }
        default:
            return state;
    }
}
