import axios from "axios";
import { API_URL, JPA_API_URL } from '../../Constants'

class TaskDataService {
  retrieveAllTasks(name) {
    return axios.get(`${JPA_API_URL}/users/{${name}/tasks`);
  }

  retrieveTask(name, id) {
    return axios.get(`${JPA_API_URL}/users/{${name}/tasks/${id}`);
  }

  deleteTask(name, id) {
    return axios.delete(`${JPA_API_URL}/users/{${name}/tasks/${id}`);
  }

  updateTask(name, id, task) {
    return axios.put(`${JPA_API_URL}/users/{${name}/tasks/${id}`, task);
  }

  createTask(name, task) {
    return axios.post(`${JPA_API_URL}/users/{${name}/tasks`, task);
  }
}

export default new TaskDataService();
