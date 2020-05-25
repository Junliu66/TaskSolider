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

    updateTask(name, id, task) {
        return axios.put(`http://localhost:8080/users/{${name}/tasks/${id}`, task)
    }

    createTask(name, task) {
        return axios.post(`http://localhost:8080/users/{${name}/tasks`, task)
    }

}

export default new TaskDataService()