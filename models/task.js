const mongoose=require('mongoose');

const Task= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name must be there"],
        // maxlength:[10,"name should not be longer than 10 characters"],
    },
    taskName:{
        type:String,
        required:[true,"must provide a task name"],
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports=mongoose.model('Task',Task);