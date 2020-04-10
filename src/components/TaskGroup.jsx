import React, { Component } from 'react';
import './TaskGroup.scss';
import Task from './Task'

class TaskGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.task = [1,2,3,4,5,6,7,8,9,10];
    }
    render() { 
        return ( 
        <article className="task-group">
            { 
                this.task.map((t, i) => <Task key={i} />)
            }
        </article>
        );
    }
}
 
export default TaskGroup;