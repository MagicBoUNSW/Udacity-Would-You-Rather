import React from 'react';
import {Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {setVerifyUser} from "../store/actions/verifyUser";
import { Redirect } from "react-router-dom";

var image = require('../store/image/captain_america-512.png');


class Login extends React.Component {
    state = {
        userId: null
    }
    handleLogin = (e) => {
        e.preventDefault()
        const {userId} = this.state
        const {dispatch} = this.props
        if (userId !== null && userId !== 'null') {
            dispatch(setVerifyUser(userId))
        }
    }

    handleSelectOption = (e) => {
        if (e.target.value !== null)
        {
            this.setState({
                userId: e.target.value
            })
        }
    }

    render() {
        const {verifyUser,users} = this.props

        console.log(this.state.userId)
        if (verifyUser !== null) {
            return (
                <Redirect to='/' />
            )
        }
        const optionUsers = Object.keys(users).map((key) => {
            let user = users[key]
            return <option value={`${user.id}`}>{`${user.name}`}</option>

        })
        return (
            <div>
                <div className="container">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col-lg-6 mt-5 bd-login">
                            <div className="bg-primary p-1" style={{borderRadius: "10px 10px 0 0"}}>
                                <h5>Welcome to the Would You Rather App!</h5>
                                <p>Please sign in to continue</p>
                            </div>
                            <div>
                                <Image src={image} size='mini' className="i-login" centered/>
                            </div>
                            <div>
                                <form onSubmit={this.handleLogin}>
                                    <select className="custom-select mr-sm-2" style={{width: "80%"}}
                                            id="inlineFormCustomSelect" onChange={this.handleSelectOption}>
                                        <option value='null'>...Select User...</option>
                                        {optionUsers}
                                    </select>
                                    <button type='submit' className="btn btn-primary mt-3 mb-3">
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({verifyUser,users}) {
    return {
        verifyUser,
        users
    }
}

export default connect(mapStateToProps)(Login)
