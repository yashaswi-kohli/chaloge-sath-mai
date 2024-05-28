import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaCar } from 'react-icons/fa';

function SearchPage() {
  const [filters, setFilters] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '',
    duration: false,
    distance: false,
    cost: false,
    smoking: false,
    pets: false,
  });

  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log(filters);
  };

  const handleBookNow = () => {
    Swal.fire({
      title: 'Booking Confirmed!',
      text: 'Your ride has been booked successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  const handleTimeSlotChange = (slot) => {
    if (selectedTimeSlots.includes(slot)) {
      setSelectedTimeSlots(selectedTimeSlots.filter((s) => s !== slot));
    } else {
      setSelectedTimeSlots([...selectedTimeSlots, slot]);
    }
  };

  const timeSlots = ["12-06 Night", "06-12 Morning", "12-06 Evening", "06-12 Night"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg p-4 mb-8 flex flex-col md:flex-row md:items-end md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-1">
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
          <input
            type="text"
            id="from"
            name="from"
            value={filters.from}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
          <input
            type="text"
            id="to"
            name="to"
            value={filters.to}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">Passengers</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={filters.passengers}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
          />
        </div>
        <div className="flex-1 md:w-auto md:ml-auto">
          <button
            type="button"
            onClick={handleSearch}
            className="w-full md:w-auto bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 text-lg"
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Sorting</h2>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" name="duration" checked={filters.duration} onChange={handleChange} className="form-checkbox" />
              <span className="ml-2">Duration</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" name="distance" checked={filters.distance} onChange={handleChange} className="form-checkbox" />
              <span className="ml-2">Distance</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" name="cost" checked={filters.cost} onChange={handleChange} className="form-checkbox" />
              <span className="ml-2">Cost</span>
            </label>
          </div>
        </div>

        <div className="w-1/4 p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Preferences</h2>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" name="smoking" checked={filters.smoking} onChange={handleChange} className="form-checkbox" />
              <span className="ml-2">Smoking Allowed</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" name="pets" checked={filters.pets} onChange={handleChange} className="form-checkbox" />
              <span className="ml-2">Pets Allowed</span>
            </label>
          </div>
        </div>

        <div className="w-1/4 p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Time Slots</h2>
          <ul>
            {timeSlots.map((slot, index) => (
              <li key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`time-slot-${index}`}
                  className="form-checkbox mr-2"
                  checked={selectedTimeSlots.includes(slot)}
                  onChange={() => handleTimeSlotChange(slot)}
                />
                <label htmlFor={`time-slot-${index}`}>{slot}</label>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Apply Filters
            </button>
            <button className="mt-4 w-full bg-gray-500 text-white py-2 rounded hover
:bg-gray-600">
              Reset Filters
            </button>
          </div>
        </div>

        <div className="w-3/4 p-4">
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          {/* Sample Search Result */}
          <div className="bg-white shadow rounded-lg p-4 mb-4 flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold">4h30</p>
              </div>
              <div className="flex items-center space-x-2 flex-grow text-center">
                <p className="text-xl font-bold">New Delhi</p>
                <div className="border-b-2 border-gray-300 flex-grow mx-2"></div>
                <p className="text-xl font-bold">Baddi</p>
                <p className="text-gray-500">Full</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <p className="text-gray-700 font-semibold">Driver:</p>
                <p className="text-gray-900 ml-2">Yashpal</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-700 font-semibold">🚗 Car:</p>
                <p className="text-gray-900 ml-2">Yashpal</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Max. 2 in the back</p>
              </div>
            </div>
            <button
              onClick={handleBookNow}
              className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600"
            >
              Book Now
            </button>
          </div>

          {/* Second Search Result (Similar Changes) */}
          <div className="bg-white shadow rounded-lg p-4 mb-4 flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold">4h30</p>
              </div>
              <div className="flex items-center space-x-2 flex-grow text-center">
                <p className="text-xl font-bold">Mumbai</p>
                <div className="border-b-2 border-gray-300 flex-grow mx-2"></div>
                <p className="text-xl font-bold">Pune</p>
                <p className="text-gray-500">Full</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <p className="text-gray-700 font-semibold">Driver:</p>
                <p className="text-gray-900 ml-2">Jane Smith</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-700 font-semibold">🚗 Car:</p>
                <p className="text-gray-900 ml-2">Honda Civic</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Max. 2 in the back</p>
              </div>
            </div>
            <button
              onClick={handleBookNow}
              className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
