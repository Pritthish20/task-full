import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { getTasks } from '../services/Hooks';
import Loader from '../components/Loader'
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchTasks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getTasks();
        if (data.length === 0) {
          setError("No tasks found.");
        } else {
          setTasks(data);
        }
      } catch (err) {
        setError("An error occurred while fetching tasks.");
      }
      setLoading(false);
    };

    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">Task List</h1>

      {loading && <Loader/>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {tasks.map((task) => (
            <TaskCard key={`task-${task._id}`} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
