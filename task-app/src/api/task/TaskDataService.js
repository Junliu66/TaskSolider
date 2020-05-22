import axios from "axios"

class TaskDataService {

    retrieveAllTasks(name) {
        return axios.get(`http://localhost:8080/users/{${name}/tasks`)
    }

}

export default new TaskDataService()