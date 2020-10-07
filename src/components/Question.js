import React from 'react';
import {Image} from "semantic-ui-react";
import { withRouter,Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import Result from "./Result";
import {handleAddAnswer} from "../store/actions/questions";

class Question extends React.Component {
    state = {
        voteOption: null
    }

    handleVote = (e) => {
        this.setState({
            voteOption: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch,verifyUser,questions,match} = this.props
        const questionId = questions[match.params.id].id
        const {voteOption} = this.state

        if(voteOption !== null) {
            dispatch(handleAddAnswer({
                verifyUser:verifyUser,
                questionId: questionId,
                answer:voteOption
            }))
            console.log(questions[match.params.id])
        }
    }

    render() {

        const {match, users, questions, verifyUser} = this.props

        if (questions[match.params.id] === undefined) {
            return (
                <Redirect to='/pagenotfound' />
            )
        }
        const question = questions[match.params.id]
        const user = users[question.author]
        let hasQuestionAnswered = false
        console.log(question)
        if (question.optionOne.votes.includes(verifyUser) || question.optionTwo.votes.includes(verifyUser)) {
            hasQuestionAnswered = !hasQuestionAnswered
        }
        console.log(hasQuestionAnswered)
        return (
            <div>
                {
                    hasQuestionAnswered
                        ? <Result author={user.name} question={question}/>
                        : <div className='container'>
                            <div className="row text-center d-flex justify-content-center">
                                <div className="col-lg-7 mt-3">
                                    <div className="card text-center">
                                        <div className="card-header">
                                            <h4 style={{float: "left"}}>{user.name} Asks</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <Image src={user.avatarURL} size='mini' className="i-face-rank"
                                                           centered/>
                                                </div>
                                                <div className="col-lg-9">
                                                    <table className="table table-hover tbl">
                                                        <thead>
                                                        <tr>
                                                            <th>
                                                                Would you rather
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody className='text-left'>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio"
                                                                           name="checkbox"
                                                                           id="exampleRadios1"
                                                                           value="optionOne"
                                                                           onChange={this.handleVote}
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="exampleRadios1">
                                                                        {question.optionOne.text}
                                                                    </label>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="form-check" >
                                                                    <input className="form-check-input" type="radio"
                                                                           name="checkbox"
                                                                           id="exampleRadios2"
                                                                           value="optionTwo"
                                                                           onChange={this.handleVote}
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="exampleRadios2">
                                                                        {question.optionTwo.text}
                                                                    </label>
                                                                </div>
                                                            </th>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <button onClick={this.handleSubmit}
                                                            className="btn btn-primary mb-4">Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

function mapStateToProps({users, questions, verifyUser}) {

    return {
        users,
        questions,
        verifyUser
    }
}

export default withRouter(connect(mapStateToProps)(Question));
