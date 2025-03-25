import React, { useState } from 'react'
import ViewTask from './ViewTask';

const TaskCard = ({ task}) => {
  const {title, description, completed }=task;
  const[viewModal,setViewModal]=useState(false);
  return (
    <div  className="max-w-md w-full p-4 bg-white shadow-lg rounded-2xl border border-gray-200">
      <div onClick={()=>setViewModal(true)} className="flex flex-col">
        <h2
          className={`text-lg font-semibold ${
            completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-1 text-sm ${
            completed ? "line-through text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>
        <div className="mt-3">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              completed ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>
      {viewModal && <ViewTask key={task._id} task={task} setModal={setViewModal}/>}
    </div>
  )
}

export default TaskCard