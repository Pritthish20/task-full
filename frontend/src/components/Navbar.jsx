import React, { useState } from "react";
import AddTask from "./AddTask";

const Navbar = () => {
  const [addModal,setAddModal]=useState(false);
  return (
    <nav className="w-full bg-white shadow-md p-4 flex flex-col sm:flex-row items-center justify-evenly">
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800">Tasks</h1>

      {/* Tagline */}
      <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-0">
        Complete your tasks
      </p>

      {/* Add Task Button */}
      <button onClick={()=> setAddModal(true)} className="mt-2 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
        + New Task
      </button>
      {addModal && <AddTask  setModal={setAddModal} />}
    </nav>
  );
};

export default Navbar;
