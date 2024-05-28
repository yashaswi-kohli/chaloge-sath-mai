import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ProfilePage from './components/ProfilePage';
import UpdateProfilePage from './components/UpdateProfilePage';
import TripsPage from './components/TripsPage';
import CancelledTripsPage from './components/CancelledTripsPage';
import PublishRide from './components/users/publish-ride';
import SearchPage from './components/SearchPage';
import ScrollToTop from './utils/scroolToTop';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
        <div className="relative min-h-screen bg-gray-100">
          <ScrollToTop />
          <Navbar isAuthenticated={isAuthenticated} />
          <div className="mt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
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
        </div>
    </Router>
  );
};

export default App;
