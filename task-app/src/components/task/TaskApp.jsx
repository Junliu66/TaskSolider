import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from './AuthenticationService.js'

class TaskApp extends Component {
  render() {
    return (
      <div className="TaskApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/tasks" component={ListTasksComponent} />
              <Route path="/logout" component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
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
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="https://www.linkedin.com/in/junliuzhang/" className="navbar-brand">
              TaskSolider
            </a>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/welcome/Junliu">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/tasks">
                Tasks
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">All Rights Reserved.</span>       
      </footer>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <div>
        <h1>You are logged out</h1>
        <div className="container">Thank you for using our application.</div>
      </div>
    );
  }
}

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
                <th>description</th>
                <th>Target Date</th>
                <th>Is Completed?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map((task) => (
                <tr>
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

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <div className="container"></div>
          Welcome {this.props.match.params.name}. You can manage your tasks{" "}
          <Link to="/tasks">here</Link>
      </div>
    ) 
  }
}

function ErrorComponent() {
  return <div>An Error Occured. I dont't know what to do! Contact Support</div>;
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Junliu66",
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
      this.state.username === "Junliu66" &&
      this.state.password === "dummy"
    ) {
      AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
      this.props.history.push(`/welcome/${this.state.username}`);
      //this.setState({ showSuccessMessage: true });
      //this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }

    //console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>login</h1>
        <div className="container">
          {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
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
          <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>
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
