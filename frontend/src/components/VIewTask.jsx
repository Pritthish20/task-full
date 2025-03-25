import React, { useEffect, useState } from "react";
import { updateTask, deleteTask } from "../services/Hooks"; // Import API functions
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewTask = ({ task, setModal }) => {
  const [editedTask, setEditedTask] = useState({ ...task });
  const [hasChanged, setHasChanged] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEditedTask({ ...task });
    setHasChanged(false);
  }, [task]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const newTask = {
      ...editedTask,
      [name]: type === "checkbox" ? checked : value,
    };

    setEditedTask(newTask);
    setHasChanged(JSON.stringify(newTask) !== JSON.stringify(task));
  };

  const handleUpdateTask = async () => {
    if (!hasChanged) return;

    setLoading(true);

    const updatedTask = await updateTask(task._id, editedTask);

    if (updatedTask) {
      toast.success("Task updated successfully!");
      setModal(false); // ✅ Close modal on success
    } else {
      toast.error("Failed to update task.");
    }

    setLoading(false);
  };

  const handleDeleteTask = async () => {
    setLoading(true);

    const success = await deleteTask(task._id);

    if (success) {
      toast.success("Task deleted successfully!");
      setModal(false); // ✅ Close modal on success
    } else {
      toast.error("Failed to delete task.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Task</h2>

        <input
          type="text"
          name="title"
          value={editedTask.title}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        <textarea
          name="description"
          value={editedTask.description}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        ></textarea>

        <label className="flex items-center space-x-2 mb-3">
          <input
            type="checkbox"
            name="completed"
            checked={editedTask.completed}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span className="text-gray-700">Mark as Completed</span>
        </label>

        <div className="flex justify-between space-x-2">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDeleteTask}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

          <div className="flex space-x-2">
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded"
              onClick={() => setModal(false)}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 rounded ${
                hasChanged
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={handleUpdateTask}
              disabled={!hasChanged || loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
