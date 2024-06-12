

const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const connectDB = require('./db/connection');
require('dotenv').config();
app.use(express.json());
const port = 3000;

app.get("/", (req, res)=>{
    res.send('Hello Api')
})

app.use('/api/v1/tasks', tasks);

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Server is listening on port : ${port} ...`);
        })
    }
    catch(error){
        console.log(`error`);
    }
}

start();
