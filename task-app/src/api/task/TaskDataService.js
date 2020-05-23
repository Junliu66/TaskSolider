import axios from "axios"

class TaskDataService {

    retrieveAllTasks(name) {
        return axios.get(`http://localhost:8080/users/{${name}/tasks`)
    }

    retrieveTask(name, id) {
        return axios.get(`http://localhost:8080/users/{${name}/tasks/${id}`)
    }


    deleteTask(name, id) {
        return axios.delete(`http://localhost:8080/users/{${name}/tasks/${id}`)
    }

}

export default new TaskDataService()