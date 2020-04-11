import React, { Component } from 'react';
import _ from 'lodash';
import './TaskGroup.scss';

import TaskGroupHeader from './TaskGroupHeader';
import Task from './Task';
import TaskGroupFooter from './TaskGroupFooter';
import { convertToHours } from '../utilities/TimeUtility';

class TaskGroup extends Component {
    render() { 
        const { tasks, taskGroup, onTaskCompleted, onTaskRemoved, onDragStart, onDragOver, onDrop, onDropTask } = this.props;
        const filterdTasks = _.filter(tasks,(task) => task.taskGroup === taskGroup);
        const numberOfTasks = filterdTasks.length;
        const totalEstimate = _.sumBy(filterdTasks, (task) => task.estimate);
        const hoursRequired = convertToHours(totalEstimate);

        return ( 
            <article className="task-group droppable" onDragOver={(e)=> onDragOver(e)} onDrop={(e)=>{ onDrop(e, taskGroup)}}>
                <TaskGroupHeader name={this.props.taskGroup.name} id={this.props.taskGroup.id} />
                { 
                    filterdTasks.map((task) => {
                        return <Task   key={task.taskId} 
                                task={task} 
                                onTaskCompleted={onTaskCompleted}
                                onTaskRemoved={onTaskRemoved}
                                onDragStart={onDragStart}
                                onDropTask={onDropTask}
                                onDragOver={onDragOver} />
                    })
                }
                <TaskGroupFooter numberOfTasks={numberOfTasks} hoursRequired={hoursRequired} />
            </article>
        );
    }
}
 
export default TaskGroup;