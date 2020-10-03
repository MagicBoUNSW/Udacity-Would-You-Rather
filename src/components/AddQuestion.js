import React from 'react';
import {connect} from "react-redux";
import {handleAddQuestion} from "../store/actions/questions";
import { Redirect } from "react-router-dom";
import {Link, withRouter} from 'react-router-dom'

class AddQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        const {verifyUser,dispatch,history} = this.props
        if(optionOne && optionTwo) {
            dispatch(handleAddQuestion({optionOne,optionTwo,verifyUser}))
        }

        history.push({pathname: '/'})
    }

    handleOptionOne = (e) => {
        e.preventDefault()
        this.setState({
            optionOne: e.target.value
        })
    }

    handleOptionTwo = (e) => {
        e.preventDefault()
        this.setState({
            optionTwo: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-lg-6 mt-5 bd-login">
                        <div className="bg-success p-3" style={{borderRadius: "10px 10px 0 0"}}>
                            <h5>Create New Question</h5>
                        </div>
                        <div className="form-group ">
                            <p style={{textAlign: "left"}} className='p-3'><b>WOULD YOU RATHER ... </b></p>
                            <div style={{padding: "0 50px"}}>
                                <input className="form-control" onChange={this.handleOptionOne} placeholder="Option 1"/>
                                <div className='mt-2 mb-2'>
                                    OR
                                </div>
                                <input className="form-control" onChange={this.handleOptionTwo} placeholder="Option 2"/>
                            </div>
                        </div>
                        <button onClick={this.handleSubmit} className="btn btn-primary mb-4">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({verifyUser}) {
    return {
        verifyUser
    }
}

export default withRouter(connect(mapStateToProps)(AddQuestion));
