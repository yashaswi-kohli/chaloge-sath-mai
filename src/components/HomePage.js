import toast from 'react-hot-toast';
import money from '../Images/money.svg';
import third from '../Images/third.svg';
import second from '../Images/second.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSection = () => {

  const navigate = useNavigate();
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [seats, setSeats] = useState(1);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('token');
    setCurrentUser(storedValue ? storedValue : '');
    }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if(currentUser.length > 0) {
      // toast.error("Login First");
      navigate('/login');
    }
  
      if (!from && !to && !date && !seats) 
          toast.error('Please enter all the details');
      else {
        try {
          // const result = await login(email, phoneNumber, password);
          // localforage.setItem('userId', result._id);
          // localforage.setItem('email', result.email);
          // localforage.setItem('number', result.number);
          // localforage.setItem('token', result.accessToken);
          // navigate('/');
        } 
        catch (error) {
          console.error('Error during signin:', error.response?.data?.message || error.message);
              toast.error(error.response?.data?.message || error.message);
        }
        finally {
          setLoading(false);
        }
      }
    };


  return (
    <div className="bg-indigo-400 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Your pick of rides at low prices
        </h1>
      </div>
      <div className="bg-white shadow rounded-lg max-w-4xl mx-auto p-4 mt-6 flex justify-between items-center space-x-4">
        <input
          type="text"
          placeholder="Leaving from"
          onChange={(e) => setFrom(e.target.value)}
          className="w-1/4 p-2 border border-gray-300 rounded-md text-black"
        />
        <input
          type="text"
          placeholder="Going to"
          onChange={(e) => setTo(e.target.value)}
          className="w-1/4 p-2 border border-gray-300 rounded-md text-black"
        />
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          defaultValue={new Date().toISOString().split('T')[0]}
          className="w-1/4 p-2 border border-gray-300 rounded-md text-black"
        />
        <input
          type="text"
          placeholder="1 passenger"
          onChange={(e) => setSeats(e.target.value)}
          className="w-1/4 p-2 border border-gray-300 rounded-md text-black"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
		  	  {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <img 
            src={money} 
            alt="money icon"
            className="ml-4 mr-auto mb-4 w-12 h-12"
          />
          <h3 className="text-lg font-medium text-black">Your pick of rides at low prices</h3>
          <p className="mt-2 text-white-600">
            No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.
          </p>
        </div>
        <div>
          <img src={second} alt="Icon 2" className="ml-10 mr-auto mb-4 w-12 h-12" />
          <h3 className="text-lg font-medium text-black">Trust who you travel with</h3>
          <p className="mt-2 text-white-600">
            We take the time to get to know each of our members and bus partners. We check reviews, profiles, and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.
          </p>
        </div>
        <div>
          <img src={third} alt="Icon 3" className="ml-7 mr-auto mb-4 w-12 h-12" />
          <h3 className="text-lg font-medium text-black">Scroll, click, tap and go!</h3>
          <p className="mt-2 text-white-600">
            Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
