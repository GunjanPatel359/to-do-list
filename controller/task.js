const Task=require('../models/task');


const getAllTask=async(req,res)=>{
    try {
        const tasks=await Task.find({});
        res.status(200).json({tasks});
    } catch (err) {
        res.status(500).json({msg:`${err} getAllTask`})
    }
}

const getTask=async(req,res)=>{
    try {
        const {id:taskId}=req.params;
        const tasks=await Task.findOne({_id:taskId});
        if(!tasks){
            res.status(500).json({msg:`could not found task with id ${taskId}`});
        }
        res.status(200).json({tasks});
    } catch (err) {
        res.status(500).json({msg:`${err} getTask`})
    }
}

const createTask=async(req,res)=>{
    try {
        const tasks=await Task.create(req.body);
        res.status(200).json({msg:`task created succesfully`,tasks})
    } catch (err) {
        res.status(500).json({msg:`${err} createTask`})
    }
}

const updateTask=async(req,res)=>{
    try {
        const {id:taskId}=req.params;
        const tasks=await Task.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators:true});
        res.status(200).json({msg:`task updated succesfully`,tasks});
    } catch (err) {
        res.status(500).json({msg:`${err} updateTask`})
    }
}

const deleteTask=async(req,res)=>{
    try {
        const {id:taskId}=req.params;
        const tasks=await Task.findOneAndDelete({_id:taskId});
        res.status(200).json({msg:`task deleted succesfully`});
    } catch (err) {
        res.status(500).json({msg:`${err} deleteTask`})
    }
}

module.exports={getAllTask,getTask,createTask,updateTask,deleteTask};