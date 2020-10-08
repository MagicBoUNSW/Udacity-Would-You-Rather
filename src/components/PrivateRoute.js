import React  from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({component: Component, ...rest }) => {
    const { verifyUser }  = rest
    return(
        <Route
            {...rest}
            render={(component) => (
                verifyUser !== null
                    ? <Component {...component} />
                    :  <Redirect to={{
                        pathname: '/login',
                        state: {from: component.location}
                    }}
                    />
            )}
        />
    )
}

function mapStateToProps({verifyUser}) {
    return {
        verifyUser
    }
}
export default connect(mapStateToProps)(PrivateRoute)
