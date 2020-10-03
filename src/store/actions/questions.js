import { _saveQuestion, _saveQuestionAnswer } from '../data/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {FormActionTypes} from "../constants";


export const listQuestions = (questions) => {
    return {
        type: FormActionTypes.LIST_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: FormActionTypes.ADD_QUESTION,
        question
    }
}

function addAnswer({verifyUser, questionId, answer}) {
    return {
        type: FormActionTypes.ADD_ANSWER,
        verifyUser,
        questionId,
        answer
    }
}

export function handleAddQuestion({optionOne, optionTwo,verifyUser}) {
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestion({
            optionOne,
            optionTwo,
            author:verifyUser
        }).then((question) =>
            dispatch(addQuestion(question))
        ).then(() =>dispatch(hideLoading()))
    }
}

export const handleAddAnswer = ({verifyUser, questionId, answer}) => {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(addAnswer({verifyUser:verifyUser, questionId:questionId, answer:answer}))
        return _saveQuestionAnswer({verifyUser:verifyUser, qid:questionId,answer:answer})
            .then(() => dispatch(hideLoading()))
    }
}
