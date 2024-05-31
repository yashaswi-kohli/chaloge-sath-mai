import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import HomePage from './components/HomePage';
import ScrollToTop from './utils/scroolToTop';
import SearchPage from './components/SearchPage';
import TripsPage from './components/Trips/TripsPage';
import ProfilePage from './components/Users/ProfilePage';
import PublishRide from './components/Trips/PublishRide';
import LoginPage from './components/Authentication/LoginPage';
import SignupPage from './components/Authentication/SignupPage';
import UpdateProfilePage from './components/Users/UpdateProfilePage';
import CancelledTripsPage from './components/Trips/CancelledTripsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
        <div className="relative min-h-screen bg-gray-100">
          <ScrollToTop />
          <Navbar isAuthenticated={isAuthenticated} />
          <div className="mt-16">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/update-profile" element={<UpdateProfilePage />} />
              <Route path="/trips" element={<TripsPage />} />
              <Route path="/cancelled-trips" element={<CancelledTripsPage />} />
              <Route path="/publishride" element={<PublishRide />} />
              <Route path="/search" element={<SearchPage />} /> {/* Add the route for PublishRide */}
            </Routes>
          </div>
          <Toaster />
        </div>
    </Router>
  );
};

export default App;
