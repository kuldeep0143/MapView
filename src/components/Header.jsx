import React, { useState } from "react";

const Header = ({}) => {
  const handleSimulateClick = () => {
    alert("Clicked");
  };

  return (
    <div className="flex gap-3 items-center justify-center bg-gray-200 p-4">
      <input className="px-4 py-2" type="number" placeholder="Latitude" />
      <input className="px-4 py-2" type="number" placeholder="Longitude" />
      <button
        onClick={handleSimulateClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Simulate
      </button>
    </div>
  );
};

export default Header;
