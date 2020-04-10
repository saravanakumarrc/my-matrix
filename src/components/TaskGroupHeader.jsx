import React, { Component } from 'react';

class TaskGroupHeader extends Component {
    render() { 
        return ( 
            <div className="task-group-header task-content" >{ this.props.name }</div>
         );
    }
}
 
export default TaskGroupHeader;