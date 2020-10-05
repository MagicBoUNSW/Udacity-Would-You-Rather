import React from 'react';
import {Image} from "semantic-ui-react";
import {Link, withRouter} from 'react-router-dom'
import {connect} from "react-redux";

class Card extends React.Component {

    handleView = (e) => {
        e.preventDefault()
        const {id, history} = this.props
        history.push({
            pathname: `/question/${id}`,
            state: {id: id}
        })
    }

    render() {
        const {questions, users, id} = this.props
        console.log(id)
        console.log("*********")
        const question = questions[id]
        const user = users[question.author]

        // const user = users[question.author]
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3">
                            <Image src={user.avatarURL} size='mini' className="i-face-rank" centered/>
                            <h6>{user.name}</h6>
                        </div>
                        <div className="col-lg-9">
                            <h5 className='text-left'>Would You Rather</h5>
                            <p className='card-text text-left'>{question.optionOne.text}</p>
                            <p>Or</p>
                            <Link to={`/question/${id}`}>
                                <button className="btn btn-primary" onClick={this.handleView}>View</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({questions, users}) {
    return {
        questions,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Card));
