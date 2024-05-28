import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !phoneNumber) {
      setError('Please enter either an email or phone number');
    } else {
      setError('');
      // Handle login logic here
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);
      console.log('Password:', password);
    }
  };

  const fillOutInformation = (event) => {
    if (event.target.value.includes('@')) setEmail(event.target.value);
    else setPhoneNumber(event.target.value);
  };

  return (
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
              onChange={fillOutInformation}
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
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          > Login </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
