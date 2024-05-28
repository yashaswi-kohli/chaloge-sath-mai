import React from 'react';
import { useNavigate } from 'react-router-dom';
import bla from '../Images/blablacar_logo_small-83b62417b8605e424242.svg';
import UserDropdown from './UserDropdown';
import PublishRide from './users/publish-ride'; // Corrected import statement

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear auth tokens, make API call)
    // After logout, redirect to the home page
    navigate('/');
  };

  // Define raw user data (placeholder)
  const userData = {
    firstName: 'Harsh', // Example first name
    lastName: 'Doe', // Example last name
    // Add more user data properties as needed
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 bg-white shadow-lg">
      <div className="flex items-center">
        <img
          src={bla}
          alt="Logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-full"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full" onClick={() => navigate('/publishride')}>
          Publish Ride
        </button>
        <UserDropdown
          userData={userData}
          handleLogout={handleLogout}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
          onClick={() => navigate('/signup')}
        >
          SignUp
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
