import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
},{timestamps:true});

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;