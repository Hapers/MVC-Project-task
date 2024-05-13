const Task = require('../models/task');

exports.addTask = (req, res) => {
    const { name, info, date, task_status} = req.body;
    Task.add({ name, info, date, task_status});
    res.redirect("/");
}

exports.index = (req, res) => {
    const tasks = Task.getAll();
    res.render("index", { tasks: tasks });
}

exports.deleteTask = (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (!isNaN(index)) {
        Task.delete(index);
        res.redirect('/');
    } else {
        res.status(400).send("Invalid index");
    }
}

exports.addTaskForm = (req, res) => {
    res.render("add");
}

exports.editTaskForm = (req, res) => {
    const index = parseInt(req.params.index, 10);
    const task = Task.get(index);
    if (task) {
        res.render("edit", { task: task, index: index });
    } else {
        res.status(404).send("Task not found");
    }
}

exports.updateTask = (req, res) => {
    const index = parseInt(req.params.index, 10);
    const { name, info, date, task_status} = req.body;

    if (!isNaN(index) && Task.update(index, { name, info, date, task_status})) {
        res.redirect("/");
    } else {
        res.status(400).send("Invalid data or index");
    }
}