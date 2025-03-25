import Tasks from '../models/task.js'

export const newTask = async(req,res,next) =>{
    if(!req.body.title ||!req.body.description){
        return res.status(400).json({message: 'Title and description are required'})
    }
    try{
        const newTask = await Tasks.create(req.body)
        res.status(201).json(newTask)
    }catch(error){
        next(error)
    }
}

export const getAllTasks = async(req,res,next) =>{
    try{
        const tasks = await Tasks.find()
        res.status(200).json(tasks)
    }catch(error){
        next(error)
    }
}

export const updateTask = async(req,res,next) =>{
    try{
        const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedTask){
            return res.status(404).json({message: 'Task not found'})
        }
        res.status(200).json(updatedTask)
    }catch(error){
        next(error)
    }
}

export const deleteTask = async(req,res,next) =>{
    try{
        const deletedTask = await Tasks.findByIdAndDelete(req.params.id)
        if(!deletedTask){
            return res.status(404).json({message: 'Task not found'})
        }
        res.status(204).json({message: 'Task deleted successfully'})
    }catch(error){
        next(error)
    }
}