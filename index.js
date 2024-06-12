const express = require("express");
const app = express();


const tasks = require("./routes/tasks")

app.use(express.json());
const port = 3000;
app.get("/", (req, res)=>{
    res.send('Hello Api')
})

app.use('/api/v1/tasks', tasks);

// get all tasks : /api/v1/tasks

app.listen(port, ()=>{
    console.log(`Server is listening on port : ${port} ...`);
})