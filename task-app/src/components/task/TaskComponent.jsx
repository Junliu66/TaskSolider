import React, {Component} from 'react'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TaskDataService from '../../api/task/TaskDataService';
import AuthenticationService from './AuthenticationService';

class TaskComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : 1,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
        TaskDataService.retrieveTask(username, this.state.id)
        .then(response => this.setState ({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
        }))

    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = "Enter at least 5 char in Description"
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date'
        }
        return errors
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {
        let {description, targetDate} = this.state
        return (
            <div>
                <h1>Task</h1>
                <div className="container">
                    <Formik 
                        initialValues={{description,targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}                       
                    >
                        {
                            (props) =>
                                <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>                                  
                                    </fieldset>
                                    <button className="btn btn-success"type="submit">Save</button>
                                </Form>
                        }                   
                    </Formik>
                </div>    
            </div>
        )
    }
}

export default TaskComponent