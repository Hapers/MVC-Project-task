let tasks = []

class Task {
    constructor({ name, info, date, task_status }) {
        this.name = name;
        this.info = info;
        this.date = date;
        this.task_status = task_status;
    }

    static add(data) {
        const newTask = new Task(data);
        tasks.push(newTask);
    }

    static delete(index) {
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
        }
    }

    static getAll() {
        return tasks;
    }

    static get(index) {
        return tasks[index];
    }

    static update(index, data) {
        if (index >= 0 && index < tasks.length) {
            tasks[index] = new Task(data);
            return true;
        }
        return false;
    }
}
module.exports = Task;