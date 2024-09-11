// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import dash from '../assets/dash.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleAddWebsite = () => {
    navigate('/add-website');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md rounded-md">
      <div className="flex items-center space-x-2">
        <img
          src={dash}
          alt="avatar"
          className="w-36 cursor-pointer"
          onClick={handleGoHome}
        />
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={handleAddWebsite}
            className="bg-[#095aba] hover:bg-[#176bcd] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Website
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
