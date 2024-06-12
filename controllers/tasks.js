const Task = require('../models/task');
const getAllTasks = (req, res)=>{
    res.send("All tasks are here!")
}

const createTask = async (req, res)=>{
    const task = await Task.create(req.body);
    res.status(201).json({task});
}

const getSingleTask = (req, res)=>{
    res.json(`id: ${req.params.id}`);
}

const updateTask = (req, res)=>{
    res.send(`Updated task`);
}

const deleteTask = (req, res)=>{
    res.send(`Deleted taks`);
}

module.exports ={
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}