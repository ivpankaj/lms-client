

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'; // Import Axios
import Layout from './Layout';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

export default function UpdatePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const api = process.env.REACT_APP_API_URL; // Use the correct environment variable for React
  const token = localStorage.getItem('token'); // Get the token from local storage

  const isFormValid = password.trim() !== '' && password === confirmPassword;

  const handlePasswordUpdate = async () => {
    if (isFormValid) {
      setLoading(true);
      try {
        // Prepare the request body
        const body = {
          newPassword: password, // Only send the new password
        };

        // Send the API request using Axios with the token in the headers
        await axios.post(`${api}/student/password/reset/afterlogin`, body, {
          headers: {
            Authorization: `${token}`, // Include the token in the Authorization header
          },
        });

        Swal.fire({
          title: 'Success',
          text: 'Password updated successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } catch (error) {
        console.error('Error updating password:', error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to update password. Please try again.',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      } finally {
        setLoading(false);
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Passwords do not match',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 mx-4">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">Skill On Time</h1>
            <p className="text-gray-500 font-bold mt-1 text-xl">Update Password</p>
          </div>
          <form className="space-y-4">
            <div className="mb-3 
             relative"
            >
              <label className="block text-gray-700 font-bold mb-2" 
             
              >

                New Password
              </label>
              <input
                className="shadow-lg border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                style={{ top: '50%', right: '17px', position: 'absolute', marginTop: '15px' }} 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mb-3 relative">
              <label className="block text-gray-700 font-bold mb-2" 
      
              >
                Confirm Password
              </label>
              <input
                className="shadow-lg border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2"
                id="confirm-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" 
                style={{ top: '50%', right: '17px', position: 'absolute', marginTop: '15px' }} 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <button
                className={`w-full ${isFormValid ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded-full`}
                type="button"
                disabled={!isFormValid || loading}
                onClick={handlePasswordUpdate}
              >
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs mt-3">&copy;2024 Skill On Time.</p>
        </div>
      </div>
    </Layout>
  );
}
