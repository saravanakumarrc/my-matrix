import React, { Component } from 'react';

import './TaskGroup.scss';

import Task from './Task';
import TaskGroupHeader from './TaskGroupHeader';
import TaskServices from '../services/TaskServices';
import TaskGroupFooter from './TaskGroupFooter';

import _ from 'lodash';

import { convertToHours } from '../utilities/TimeUtility';

class TaskGroup extends Component {
    taskService = new TaskServices();

    constructor(props) {
        super(props);
        this.state = {  };
        this.task = this.taskService.getTaskByTaskGroup(props.taskGroup);
    }
    render() { 
        const numberOfTasks = this.task.length;
        const totalEstimate = _.sumBy(this.task, (task) => task.estimate);
        const hoursRequired = convertToHours(totalEstimate);

        return ( 
            <article className="task-group">
                <TaskGroupHeader name={this.props.taskGroup.name} />
                { 
                    this.task.map((task) => <Task key={task.taskId} description={task.description} />)
                }
                <TaskGroupFooter numberOfTasks={numberOfTasks} hoursRequired={hoursRequired} />
            </article>
        );
    }
}
 
export default TaskGroup;