import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationServie from './AuthenticationService.js'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationServie.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login"/>
        }
    }
}

export default AuthenticatedRoute