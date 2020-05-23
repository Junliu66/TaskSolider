import React, {Component} from 'react'

class TaskComponent extends Component {
    render() {
        return <div>Task Component for id - {this.props.match.params.id}</div>
    }
}

export default TaskComponent