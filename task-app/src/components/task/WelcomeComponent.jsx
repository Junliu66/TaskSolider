import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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

export default WelcomeComponent

