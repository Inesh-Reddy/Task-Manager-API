const getAllTasks = (req, res)=>{
    res.send("All tasks are here!")
}

const createTask = (req, res)=>{
    res.json(`Created Task`);
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