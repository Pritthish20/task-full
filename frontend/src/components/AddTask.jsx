import React, { useState } from "react";
import { addTask } from "../services/Hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = ({ setModal }) => {
  const [task, setTask] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Handle task submission
  const handleSaveTask = async () => {
    if (!task.title.trim() || !task.description.trim()) return;

    setLoading(true);

    const newTask = await addTask(task);

    if (!newTask) {
      toast.error("Failed to add task. Please try again.");
    } else {
      toast.success("Task added successfully!");
      setModal(false); // Close modal on success
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Task</h2>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        ></textarea>

        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-red-400 text-white rounded"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded ${
              task.title && task.description
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleSaveTask}
            disabled={!task.title || !task.description || loading}
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
