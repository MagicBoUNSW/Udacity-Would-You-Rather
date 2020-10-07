import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import AddQuestion from "./components/AddQuestion";
import Rank from "./components/Rank";
import Question from "./components/Question";
import Result from "./components/Result";
import {connect} from "react-redux";
import {getInitialData} from "./store/data/_DATA";
import {listUsers} from "./store/actions/users";
import {listQuestions} from "./store/actions/questions";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import LoadingBar from 'react-redux-loading-bar'
import PageNotFound from "./components/404";
import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(showLoading())
        getInitialData()
            .then(({ users, questions }) => {
                dispatch(listUsers(users))
                dispatch(listQuestions(questions))
                dispatch(hideLoading())
            })
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <LoadingBar />
                    <Route path="/login" exact component={Login}/>
                    <PrivateRoute path="/" exact component={Dashboard} />
                    <PrivateRoute path="/add" exact component={AddQuestion}/>
                    <PrivateRoute path="/leaderboard" exact component={Rank}/>
                    <PrivateRoute path="/question/:id" exact component={Question}/>
                    <PrivateRoute path="/result" exact component={Result}/>

                    <PrivateRoute path="/pagenotfound" exact component={PageNotFound}/>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(App)
