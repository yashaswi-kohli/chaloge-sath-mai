import React, { useState } from 'react';
import Swal from 'sweetalert2';

function PublishRide() {
  const [rideDetails, setRideDetails] = useState({
    from: '',
    to: '',
    departureTime: '',
    seats: '',
    price: '',
    car: '',
    instantBooking: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRideDetails(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform ride publishing logic here
    // For demonstration, we'll display a success message using SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Ride Published!',
      text: 'Your ride has been successfully published.',
      confirmButtonColor: '#3085d6',
    });
    // Reset form fields after submission
    setRideDetails({
      from: '',
      to: '',
      departureTime: '',
      seats: '',
      price: '',
      car: '',
      maxTwoSeatsAtBack: false
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Publish Your Ride</h1>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="from" className="block text-sm font-semibold mb-2">From</label>
          <input type="text" id="from" name="from" value={rideDetails.from} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter departure location" required />
        </div>
        <div className="mb-6">
          <label htmlFor="to" className="block text-sm font-semibold mb-2">To</label>
          <input type="text" id="to" name="to" value={rideDetails.to} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter destination location" required />
        </div>
        <div className="mb-6">
          <label htmlFor="departureTime" className="block text-sm font-semibold mb-2">Departure Time</label>
          <input type="datetime-local" id="departureTime" name="departureTime" value={rideDetails.departureTime} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="seats" className="block text-sm font-semibold mb-2">Seats Available</label>
          <input type="number" id="seats" name="seats" value={rideDetails.seats} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter number of seats" required />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block text-sm font-semibold mb-2">Price per Seat</label>
          <input type="number" id="price" name="price" value={rideDetails.price} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter price per seat" required />
        </div>
        <div className="mb-6">
          <label htmlFor="car" className="block text-sm font-semibold mb-2">Car Model</label>
          <input type="text" id="car" name="car" value={rideDetails.car} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter car model" required />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Maximum people in the back</label>
          <input type="checkbox" id="maxTwoSeatsAtBack" name="maxTwoSeatsAtBack" checked={rideDetails.maxTwoSeatsAtBack} onChange={handleChange} className="mr-2 leading-tight" />
          <span className="text-sm">2</span>
        </div>
        <div className="mb-6">
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Publish</button>
        </div>
      </form>
    </div>
  );
}

export default PublishRide;
