import React from 'react';
import {Image} from "semantic-ui-react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'

class Result extends React.Component {

    render() {
        const {match, users, questions, verifyUser} = this.props
        const question = questions[match.params.id]
        const user = users[question.author]
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length

        const totalVotes = optionOneVotes + optionTwoVotes

        const optionOneProgress = (optionOneVotes / totalVotes) * 100 + '%'
        const optionTwoProgress = (optionTwoVotes / totalVotes) * 100 + '%'

        const yourVote = question.optionOne.votes.includes(verifyUser) ? 1 : 2




        return (
            <div className='container'>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-lg-7 mt-3">
                        <div className="card text-center">
                            <div className="card-header">
                                <h4 style={{float: "left"}}>Asked by {user.name}</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <Image src={user.avatarURL} size='mini' className="i-face-rank" centered/>
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
                                                <th>
                                                    {
                                                        yourVote === 1
                                                            ? (
                                                                <div style={{width: "100%"}}>
                                                                    <span
                                                                        style={{float: "left"}}>{question.optionOne.text}</span>
                                                                    <span style={{
                                                                        float: "right",
                                                                        color: "Red"
                                                                    }}>Your Vote</span>
                                                                </div>
                                                            )
                                                            : <span>{question.optionOne.text}</span>
                                                    }
                                                    <div className="progress" style={{width: "100%"}}>
                                                        <div className="progress-bar progress-bar-success"
                                                             role="progressbar" aria-valuenow={optionOneVotes}
                                                             aria-valuemin="0"
                                                             aria-valuemax={totalVotes}
                                                             style={{width: `${optionOneProgress}`}}>
                                                        </div>
                                                    </div>
                                                    <div className='text-center'>
                                                        <span>{optionOneVotes} votes out of {totalVotes}</span>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    {
                                                        yourVote === 2
                                                            ? (
                                                                <div style={{width: "100%"}}>
                                                                    <span
                                                                        style={{float: "left"}}>{question.optionTwo.text}</span>
                                                                    <span style={{
                                                                        float: "right",
                                                                        color: "Red"
                                                                    }}>Your Vote</span>
                                                                </div>
                                                            )
                                                            : <span>{question.optionTwo.text}</span>
                                                    }

                                                    <div className="progress" style={{width: "100%"}}>
                                                        <div className="progress-bar"
                                                             role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                                             aria-valuemax="100" style={{
                                                            width: `${optionTwoProgress}`,
                                                            background: "#5cb85c"
                                                        }}>
                                                        </div>
                                                    </div>
                                                    <div className='text-center'>
                                                        <span>{optionTwoVotes} votes out of {totalVotes}</span>
                                                    </div>
                                                </th>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default withRouter(connect(mapStateToProps)(Result));
