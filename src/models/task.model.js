const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task:String,
    completed:{
        type : Boolean,
        default : false
    }
});

const taskModel = mongoose.model("tasks",taskSchema);

module.exports = taskModel;