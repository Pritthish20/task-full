import React from "react";

const Loader = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 w-full">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow rounded-lg animate-pulse"
        >
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
