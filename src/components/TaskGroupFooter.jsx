import React, { Component } from 'react';

class TaskGroupFooter extends Component {
    render() { 
        return ( 
            <div className="task-group-footer task-content" >
                <div className="task-group-footer-numberOfTasks">{ this.props.numberOfTasks }</div>
                <div className="task-group-footer-hoursRequired">{ this.props.hoursRequired }</div>
            </div>
         );
    }
}
 
export default TaskGroupFooter;