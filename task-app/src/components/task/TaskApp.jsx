import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class TaskApp extends Component {
  render() {
    return (
      <div className="TaskApp">
        <Router>
          <>
            <HeaderComponent/>
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/tasks" component={ListTasksComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent/>
          </>
        </Router>
        {/*<LoginComponent />
        <WelcomeComponent />*/}
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        Header <hr/>
      </div>
    )
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <hr/>Footer
      </div>
    )
  }
}



class ListTasksComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, description: "Learn to Dance", done: false, targetDate: new Date() },
        { id: 2, description: "Become an Expert at React", done: false, targetDate: new Date() },
        { id: 3, description: "Learn React", done: false, targetDate: new Date() },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>List Tasks</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Target Date</th>
              <th>Is Completed?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task) => (
              <tr>
                <td>{task.id}</td>
                <td>{task.description}</td>
                <td>{task.done.toString()}</td>
                <td>{task.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome {this.props.match.params.name}. You can manage your tasks
        <Link to="/tasks">here</Link>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Occured. I dont't know what to do! Contact Support</div>;
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "in28minutes",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    //this.handleUserrnameChange = this.handleUsernameChange.bind(this);
    //this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    if (
      this.state.username === "in28minutes" &&
      this.state.password === "dummy"
    ) {
      this.props.history.push(`/welcome/${this.state.username}`);
      //this.setState({ showSuccessMessage: true });
      //this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
      console.log("Failed");
    }

    //console.log(this.state);
  }

  render() {
    return (
      <div>
        {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

// function ShowInvalidCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invalid Credentials</div>;
//   }
//   return null;
// }

// function ShowLoginSuccessMessage(props) {
//   if (props.showSuccessMessage) {
//     return <div>Login Successful</div>;
//   }
//   return null;
// }

export default TaskApp;
