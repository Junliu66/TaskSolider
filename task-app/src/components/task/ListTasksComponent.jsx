import React, { Component } from "react";

class ListTasksComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: [
          {
            id: 1,
            description: "Learn to Dance",
            done: false,
            targetDate: new Date(),
          },
          {
            id: 2,
            description: "Become an Expert at React",
            done: false,
            targetDate: new Date(),
          },
          {
            id: 3,
            description: "Learn React",
            done: false,
            targetDate: new Date(),
          },
        ],
      };
    }
  
    render() {
      return (
        <div>
          <h1>List Tasks</h1>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Target Date</th>
                  <th>Is Completed?</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.description}</td>
                    <td>{task.done.toString()}</td>
                    <td>{task.targetDate.toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  export default ListTasksComponent