import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTasksComponent from './ListTasksComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import TaskComponent from './TaskComponent.jsx';

class TaskApp extends Component {
    render() {
        return (
            <div className="TaskApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/tasks/:id" component={TaskComponent}/>
                            <AuthenticatedRoute path="/tasks" component={ListTasksComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>                        
                            <Route component={ErrorComponent}/>
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

export default TaskApp;
