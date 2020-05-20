class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log('successful login')
        sessionStorage.setItem('authenticationUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticationUser');
    }


}

export default new AuthenticationService()