import React from 'react';
import Card from "./Card";
import {connect} from "react-redux";
import {Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Dashboard extends React.Component {
    render() {
        const {unanswered,answered} = this.props
        return (
            <div className='container'>
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-lg-6 mt-5">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#unanswered"
                                   role="tab"
                                   aria-controls="home" aria-selected="true">Unanswered Questions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#answered" role="tab"
                                   aria-controls="profile" aria-selected="false">Answered Questions</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="unanswered" role="tabpanel"
                                 aria-labelledby="home-tab">
                                {
                                    unanswered.map((i) => (
                                        <Card id={i}/>
                                    ))
                                }
                            </div>
                            <div className="tab-pane fade" id="answered" role="tabpanel"
                                 aria-labelledby="profile-tab">
                                {
                                    answered.map((i) => (
                                        <Card id={i} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps({questions,verifyUser}) {
    const unanswered = Object.keys(questions)
        .filter((item) => (
            !questions[item].optionOne.votes.includes(verifyUser) && !questions[item].optionTwo.votes.includes(verifyUser)
        ))
        .sort((a,b) => (questions[b].timestamp - questions[a].timestamp))
    const answered = Object.keys(questions)
        .filter((item) => (
            questions[item].optionOne.votes.includes(verifyUser) || questions[item].optionTwo.votes.includes(verifyUser)
        ))
        .sort((a,b) => (questions[b].timestamp - questions[a].timestamp))

    return {
        unanswered,
        answered
    }
}

export default connect(mapStateToProps)(Dashboard);
