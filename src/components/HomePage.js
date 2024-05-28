import React, { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [from, setFrom] = useState({ city: '', state: '' });
  const [to, setTo] = useState({ city: '', state: '' });
  const [departureTime, setDepartureTime] = useState('');
  const [reachingTime, setReachingTime] = useState('');
  const [seats, setSeats] = useState('');
  const [car, setCar] = useState('');
  const [price, setPrice] = useState('');
  const [instantBooking, setInstantBooking] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/trips', {
        from: `${from.city}, ${from.state}`,
        to: `${to.city}, ${to.state}`,
        departureTime,
        reachingTime,
        seats,
        car,
        price,
        instantBooking,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error creating trip');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6">Create a Trip</h2>
          {message && <p className="text-green-500 mb-4">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="from">From</label>
              <input
                type="text"
                id="from"
                className="w-full px-3 py-2 border rounded"
                value={from.city}
                onChange={(e) => setFrom({ ...from, city: e.target.value })}
                placeholder="City"
              />
              <input
                type="text"
                id="fromState"
                className="w-full px-3 py-2 border rounded mt-2"
                value={from.state}
                onChange={(e) => setFrom({ ...from, state: e.target.value })}
                placeholder="State"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="to">To</label>
              <input
                type="text"
                id="to"
                className="w-full px-3 py-2 border rounded"
                value={to.city}
                onChange={(e) => setTo({ ...to, city: e.target.value })}
                placeholder="City"
              />
              <input
                type="text"
                id="toState"
                className="w-full px-3 py-2 border rounded mt-2"
                value={to.state}
                onChange={(e) => setTo({ ...to, state: e.target.value })}
                placeholder="State"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="departureTime">Departure Time</label>
              <input
                type="datetime-local"
                id="departureTime"
                className="w-full px-3 py-2 border rounded"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="reachingTime">Reaching Time</label>
              <input
                type="datetime-local"
                id="reachingTime"
                className="w-full px-3 py-2 border rounded"
                value={reachingTime}
                onChange={(e) => setReachingTime(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="seats">Seats</label>
              <input
                type="number"
                id="seats"
                className="w-full px-3 py-2 border rounded"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="car">Car</label>
              <input
                type="text"
                id="car"
                className="w-full px-3 py-2 border rounded"
                value={car}
                onChange={(e) => setCar(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                className="w-full px-3 py-2 border rounded"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="instantBooking">Instant Booking</label>
              <input
                type="checkbox"
                id="instantBooking"
                className="mr-2 leading-tight"
                checked={instantBooking}
                onChange={(e) => setInstantBooking(e.target.checked)}
              />
              <span className="text-gray-700">Enable instant booking</span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Create Trip
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-white py-6 shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Top carpool routes</h3>
            <ul>
              <li>Delhi → Chandigarh</li>
              <li>Mumbai → Pune</li>
              <li>Kanpur → Lucknow</li>
              <li>Bengaluru → Chennai</li>
              <li>Pune → Mumbai</li>
            </ul>
            <ul className="mt-4">
              <li className="text-blue-500">All carpool routes</li>
              <li className="text-blue-500">All carpool destinations</li>
            </ul>
          </div>
          <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
            <ul>
              <li>How It Works</li>
              <li>About Us</li>
              <li>Help Centre</li>
              <li>Press</li>
              <li>We're Hiring!</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Language</h3>
            <ul>
              <li>English (India)</li>
              <li className="text-blue-500">Language</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

