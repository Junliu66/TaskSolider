import React, {Component} from "react";
import TaskDataService from '../../api/task/TaskDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTasksComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            message: null
        };

        this.updateTaskClicked = this.updateTaskClicked.bind(this)
        this.deleteTaskClicked = this.deleteTaskClicked.bind(this)
        this.addTaskClicked = this.addTaskClicked.bind(this)
        this.refreshTasks = this.refreshTasks.bind(this)
    }

    componentDidMount() {
        this.refreshTasks()
    }

    refreshTasks() {
        let username = AuthenticationService.getLoggedInUserName()
        TaskDataService.retrieveAllTasks(username)
        .then(
            response => {
                this.setState({tasks : response.data})
            }
        )
    }

    addTaskClicked() {

        this.props.history.push(`/tasks/-1`)

    }

    updateTaskClicked(id) {
        this.props.history.push(`/tasks/${id}`)
        // let username = AuthenticationService.getLoggedInUserName()
        // TaskDataService.deleteTask(username, id)
        // .then(
        //     response => {
        //         this.setState({message : `Delete of task ${id} successful`})
        //         this.refreshTasks();
        //     }
        // )

    }

    deleteTaskClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        TaskDataService.deleteTask(username, id)
        .then(
            response => {
                this.setState({message : `Delete of task ${id} successful`})
                this.refreshTasks();
            }
        )

    }

    render() {
        return (
            <div>
                <h1>List Tasks</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.tasks.map((task) => (
                            <tr key={task.id}>
                                <td>{task.description}</td>
                                <td>{task.done.toString()}</td>
                                <td>{moment(task.targetDate).format('YYYY-MM-DD')}</td>
                                <td><button className="btn btn-success" onClick={() => this.updateTaskClicked(task.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteTaskClicked(task.id)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="row">
                            <button className="btn btn-success" onClick={this.addTaskClicked}>Add</button>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTasksComponent