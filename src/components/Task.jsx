import React, { Component } from 'react';
import './Task.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="task task-content">
                <input type="checkbox" name={ this.props.taskId } value="completed"></input>
                <label className="task-description">{ this.props.description }</label>
                <FontAwesomeIcon className="task-delete" icon={faTrashAlt} />
            </div>
         );
    }
}
 
export default Task;