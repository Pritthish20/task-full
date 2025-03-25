import axios from "axios";

const TASK_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export const getTasks = async () => {
    try {
        const response = await axios.get(`${TASK_URL}/tasks`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error.message);
        return []; 
    }
};

export const addTask = async (task) => {
    try {
        const response = await axios.post(`${TASK_URL}/tasks`, task);
        return response.data;
    } catch (error) {
        console.error("Error adding task:", error.message);
        return null; 
    }
};

export const updateTask = async (id, updatedTask) => {
    try {
        const response = await axios.put(`${TASK_URL}/tasks/${id}`, updatedTask);
        return response.data;
    } catch (error) {
        console.error("Error updating task:", error.message);
        return null;
    }
};

export const deleteTask = async (id) => {
    try {
        await axios.delete(`${TASK_URL}/tasks/${id}`);
        return true; 
    } catch (error) {
        console.error("Error deleting task:", error.message);
        return false; 
    }
};
