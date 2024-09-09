import React from 'react';
import dash from '../assets/dash.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md rounded-md">
      <div className="flex items-center space-x-2">
       <img src={dash} alt="avatar" className="w-36"/>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Hi Rebecca</span>
          <img
            src="https://via.placeholder.com/30"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
