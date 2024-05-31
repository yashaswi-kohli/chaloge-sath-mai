import toast from 'react-hot-toast';
import { login } from '../../services/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [currentUser, setCurrentUser] = useState('');

	useEffect(() => {
		const storedValue = localStorage.getItem('token');
		setCurrentUser(storedValue ? storedValue : '');
	}, []);

	const homeNavigate = () => navigate('/home');

	const checkWheatherItsEmailOrNubmer = (event) => {
		if (event.target.value.includes('@')) setEmail(event.target.value);
		else setPhoneNumber(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);

		if (!email && !phoneNumber) setError('Please enter either an email or phone number');
		else {
			try {
				const {userId, newEmail, token, takenNumber} = await login(email, phoneNumber, password);

				localStorage.setItem("token", token);
				localStorage.setItem("userId", userId);
				localStorage.setItem("email", newEmail);
				localStorage.setItem("number", takenNumber);

				navigate('/home');
			} 
			catch (error) {
				console.error('Error during login:', error.response?.data?.message || error.message);
      			toast.error(error.response?.data?.message || error.message);
			}
			finally {
				setLoading(false);
			}
		}
	};

  

  return currentUser.length > 0 ? ( homeNavigate() ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/4 -mt-44 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email / Phone Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={checkWheatherItsEmailOrNubmer}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
		    disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >                     
		  	{loading ? 'Logging in...' : 'Login'}
		  </button>

		  <div className="mt-6 text-center">
                  <p>
                    Don’t have an account?{' '}
                    <Link to="/signup" className="text-blue-500">
                      Sign Up
                    </Link>
                  </p>
                </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
