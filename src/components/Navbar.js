import React from 'react';
import {Image} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setlogOut} from "../store/actions/verifyUser";
import {Redirect} from "react-router-dom";


class Navbar extends React.Component {

    handleLogOut = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(setlogOut())
    }

    render() {
        const {verifyUser,users} = this.props
        const user = users[verifyUser]
        console.log(user)
        if (verifyUser === null) {
            return (
                <Redirect to='/login' />
            )
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#e3f2fd"}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 menu-nav">
                            <li className="nav-item active">
                                <Link to='/'>
                                    <a className="nav-link">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/addQuestion'>
                                    <a className="nav-link">Add Question</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/rank'>
                                    <a className="nav-link">Rank</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <span>Hi, {user.name}</span>
                            <Image src={user.avatarURL} size='mini' className="i-face" centered/>
                            <Link to='/login' exact>
                                <button
                                    onClick={this.handleLogOut}
                                    className="btn btn-outline-success my-2 my-sm-0"
                                    type="button"
                                >Log out
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
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

export default connect(mapStateToProps)(Navbar)
