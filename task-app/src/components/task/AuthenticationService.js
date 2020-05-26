import axios from "axios";

class AuthenticationService {

    excuteBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/basicauth', 
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    createBasicAuthToken(username, password) {
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return basicAuthHeader
    }

    registerSuccessfulLogin(username, password) {
        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        //console.log('successful login')
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosIntercepters(this.createBasicAuthToken(username, password))
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        console.log(user)
        if (user === null) {
            return false
        }
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return ''
        }
        return user
    }

    setupAxiosIntercepters(basicAuthHeader) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()