import axios from "axios"

class HelloWorldServie {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name) {
        //let username = 'junliu66'
        //let password = 'dummy'

        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        //, 
        // {
        //     headers: {
        //         authorization: basicAuthHeader
        //     }
        // }
        )

    }

}

export default new HelloWorldServie()