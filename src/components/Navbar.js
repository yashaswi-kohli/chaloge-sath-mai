import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDropdown from './Dropdown/UserDropdown';
import bla from '../Images/blablacar_logo_small-83b62417b8605e424242.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 bg-white shadow-lg">
      <div className="flex items-center">
        <img
          src={bla}
          alt="Logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate('/home')}
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
          <div>
            <button class="_57x2jp2" aria-label="Connect" aria-controls="connect-menu" aria-expanded="false" type="button">
              <div class="_1qgcerq0"><img class="_1qgcerq7" src="https://cdn.blablacar.com/kairos/assets/images/signin-640a2bdb09c085fd1d8e.svg" alt="" data-testid="single-logo" onClick={handleDropdownToggle}/>
              </div>

              {dropdownOpen ? 
                (
                  <UserDropdown />
                ) : (
                  <div>
                    <div></div>
                  </div>
                )
              }

            </button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
