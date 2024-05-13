const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}))

const taskController = require('./controllers/taskController');

app.get("/", taskController.index);

app.get("/add", taskController.addTaskForm);

app.post("/add__task", taskController.addTask);

app.get('/delete-task/:index', taskController.deleteTask);

app.get("/edit-task/:index", taskController.editTaskForm);

app.post("/edit-task/:index", taskController.updateTask);


app.post("/add__task", (req, res) => {
    Task.add(req.body);
    res.redirect("/");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})