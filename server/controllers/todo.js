// We will define the methods for the end points

const Todo = require("../models/todo");

exports.getAllTodo = (req, res) => {
    // return all the todo in the collection
    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
};

exports.postCreateTodo = (req, res) => {
    // create a todo and return a success message
    Todo.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
};

exports.putUpdateTodo = (req, res) => {
    // requires two parameters the id and data of the todo to be updated
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    // requires only one parameter that is the id of the todo
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};