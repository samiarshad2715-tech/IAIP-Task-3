const express = require("express");
const taskModel = require("./models/task.model.js")
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-task",async(req,res)=>{
    // console.log(req.body);
    // console.log(req.body.task);
    // console.log(req.body.completed);
    
    await taskModel.create({
        task:req.body.task,
        completed:req.body.completed
    });
    console.log("Task saved in database Successfully");

    res.status(201).json({
        message:"Task created Successfully"
    })
})

app.get("/view-tasks",async(req,res)=>{

    const allTasks = await taskModel.find();
    console.log("Tasks fetched Successfully");
    // console.log(allTasks);

    res.status(200).json({
        message:"Tasks fetched Successfully",
        allTasks
    })
})

app.patch("/edit-tasks/:id",async(req,res)=>{

    const ID = req.params.id;
    // console.log(_id);

    await taskModel.findOneAndUpdate(
        {_id:ID},
        {task:req.body.task,
        completed:req.body.completed}
    );
    console.log("Task updated Successfully");

    res.status(200).json({
        message:"Tasks updated Successfully"
    });
})

app.delete("/delete-tasks/:id",async(req,res)=>{

    const ID = req.params.id;
    await taskModel.findOneAndDelete({
        _id:ID
    });

    console.log("Task deleted Successfully");
    res.status(200).json({
        message:"Task Deleted Successfully"
    })
})

module.exports = app;