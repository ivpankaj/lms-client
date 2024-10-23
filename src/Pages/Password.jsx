import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate from react-router-dom
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import UpdatePassword from '../services/api/auth/Update_password'; // Adjust the import path
import Layout from '../Components/Layout';

const UpdatePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Use the useNavigate hook from react-router-dom

  const validatePassword = () => {
    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters long.');
      return false;
    }
    if (newPassword !== confirmPassword) {
      setError('New password and confirmation password do not match.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      return;
    }

    try {
      await UpdatePassword(oldPassword, newPassword, navigate); // Pass the navigate function here
      setError(''); // Clear any previous errors if successful
    } catch (error) {
      console.error('Error updating password:', error);
      setError('Failed to update the password. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-md w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Update Password
          </h2>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div className="relative">
            <label
              htmlFor="oldPassword"
              className="block text-gray-700 font-medium"
            >
              Old Password
            </label>
            <input
              type={showOldPassword ? 'text' : 'password'}
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              className="mt-2 border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-color"
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl mt-1"
            >
              {showOldPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
            </button>
          </div>

          <div className="relative">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 font-medium"
            >
              New Password
            </label>
            <input
              type={showNewPassword ? 'text' : 'password'}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="mt-2 border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-color"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl mt-1"
            >
              {showNewPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
            </button>
          </div>

          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium"
            >
              Confirm New Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-2 border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-color"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl mt-1"
            >
              {showConfirmPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-color text-white p-3 rounded-md font-semibold hover:bg-gray-500 transition duration-300"
          >
            Update Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UpdatePasswordForm;
