// TripsPage.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function TripsPage() {
  const [trips, setTrips] = useState([
    {
      id: 1,
      from: 'Delhi',
      to: 'Chandigarh',
      departureTime: '2024-06-01 09:00',
      reachingTime: '2024-06-01 12:00',
      seats: 3,
      car: 'Toyota Corolla',
      price: 500,
      instantBooking: true
    },
    {
      id: 2,
      from: 'Mumbai',
      to: 'Pune',
      departureTime: '2024-06-05 10:00',
      reachingTime: '2024-06-05 13:00',
      seats: 2,
      car: 'Honda Civic',
      price: 400,
      instantBooking: false
    }
  ]);

  const handleCancelTrip = async (tripId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to cancel this trip?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!'
    });

    if (result.isConfirmed) {
      const updatedTrips = trips.filter(trip => trip.id !== tripId);
      setTrips(updatedTrips);
      Swal.fire(
        'Cancelled!',
        'Your trip has been cancelled.',
        'success'
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Your Trips</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trips.map(trip => (
          <div key={trip.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">{trip.from} to {trip.to}</h2>
            <p className="text-sm text-gray-600 mb-2">Departure: {trip.departureTime}</p>
            <p className="text-sm text-gray-600 mb-2">Reaching: {trip.reachingTime}</p>
            <p className="text-sm text-gray-600 mb-2">Seats available: {trip.seats}</p>
            <p className="text-sm text-gray-600 mb-2">Car: {trip.car}</p>
            <p className="text-sm text-gray-600 mb-2">Price: ${trip.price}</p>
            <p className="text-sm text-gray-600 mb-4">Instant Booking: {trip.instantBooking ? 'Yes' : 'No'}</p>
            <button
              className="block w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600"
              onClick={() => handleCancelTrip(trip.id)}
            >
              Cancel Trip
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripsPage;
