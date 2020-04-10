import Tasks from '../data/Tasks';

export default class TaskService {
    tasks = [];

    constructor(){
        this.tasks = Tasks;
    }

    getAllTasks() {
        return this.tasks;
    }

    getTaskByTaskGroup(taskGroup) {
        return this.tasks.filter(task => task.taskGroup === taskGroup);
    }
}