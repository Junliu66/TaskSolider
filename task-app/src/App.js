import React, {Component} from "react";
import "./App.css";
import "./bootstrap.css";
import TaskApp from "./components/task/TaskApp";

class App extends Component {
    render() {
        return (
            < div
        className = "App" >
            < TaskApp / >
            < /div>
    )
        ;
    }
}

export default App;
