class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        console.log('successful login')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        console.log(user)
        if(user===null) {
            return false
        }
        return true
    }
}

export default new AuthenticationService()