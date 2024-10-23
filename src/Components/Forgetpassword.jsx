import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios'; 


import logo from '../assets/logo-min.png'; 

export default function ForgetPassword() {
  const [emailAddress, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory(); 

  const isFormValid = emailAddress.trim() !== '';

  const handleOtp = async () => {
    if (isFormValid) {
      setLoading(true);
      try {
        // Replace with your API request function
        await axios.post('/api/auth/get-otp', { email: emailAddress });
        // Redirect on success
        history.push('/some-success-page'); // Replace with your success page route
      } catch (error) {
        console.error('Error requesting OTP:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div id="login-page" className="min-h-screen flex items-center justify-center bg-gray-200">
      <div id="login-container" className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 mx-4">
        <div id="logo-section" className="text-center mb-6">
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" className="w-24 h-24 mt-10" />
            <h1 className="lg:text-3xl font-bold text-gray-800 mt-10 -ml-4">Skill On Time</h1>
          </div>
          <p className="text-gray-500 font-bold mt-2 text-xl">Forget Password</p>
        </div>
        <form id="otp-form" className="space-y-6">
          <div id="email-input-section" className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Enter E-mail
            </label>
            <input
              className="shadow-lg border rounded-2xl w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color"
              id="email"
              type="email"
              placeholder="E-mail"
              value={emailAddress}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div id="otp-button-section" className="flex flex-col items-center">
            <button
              className={`w-full ${
                isFormValid
                  ? 'bg-black hover:bg-lightColor'
                  : 'bg-gray-300 cursor-not-allowed'
              } text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
              type="button"
              disabled={!isFormValid}
              onClick={handleOtp}
            >
              {loading ? 'Loading...' : 'Get OTP'}
            </button>
            <a
              id="login-link"
              className="mt-4 text-color hover:text-lightColor font-bold text-sm"
              href="/"
            >
              Go to Login
            </a>
          </div>
        </form>
        <p id="footer-text" className="text-center text-gray-500 text-xs mt-4">
          &copy;2024 Skill On Time.
        </p>
      </div>
    </div>
  );
}
