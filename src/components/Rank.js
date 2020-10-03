import React from 'react';
import {Image} from "semantic-ui-react";
import {connect} from "react-redux";
var image = require('../store/image/iron_man-512.png');

class Rank extends React.Component{
    render() {
        const {userRank} = this.props
        return (
            <div className='container'>
                <div className="row text-center d-flex justify-content-center">
                    {
                        userRank.map((user) => (
                            <div className="col-lg-7 mt-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <h4 style={{float:"left"}}>{user.name}</h4>
                                        <h4 style={{float:"right"}}>Score : {user.score}</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <Image src={user.avatarURL} size='mini' className="i-face-rank" centered/>
                                            </div>
                                            <div className="col-lg-9">
                                                <table className="table table-hover tbl">
                                                    <thead>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">Answered questions</th>
                                                        <td>{user.answeredQuestions}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Created questions</th>
                                                        <td>{user.createdQuestions}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
function mapStateToProps({users}) {
    const userRank = Object.keys(users)
        .map((user) => {
            const userRankDetails = {
                name : users[user].name,
                avatarURL: users[user].avatarURL,
                answeredQuestions: Object.keys(users[user].answers).length,
                createdQuestions: users[user].questions.length,
                score: Object.keys(users[user].answers).length + users[user].questions.length
            }
            return(userRankDetails)
        })
        .sort((a,b) => (b.score - a.score))
    console.log(userRank)
    return {
        userRank
    }
}

export default connect(mapStateToProps)(Rank)
