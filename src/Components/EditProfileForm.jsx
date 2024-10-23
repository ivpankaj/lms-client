import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import { Edit_number } from '../services/api/auth/Edit_number'; // Adjust import path if needed

const EditProfileForm = ({ userData }) => {
  const [formData, setFormData] = useState({
    contactNumber: '',
   

  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); // React Router for navigation

  useEffect(() => {
    if (userData) {
      setFormData({
        contactNumber: userData.contactNumber,
       
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await Edit_number(formData);
      setSuccess('Contact number updated successfully!');
      navigate('/profile'); // Navigate to profile page or another route
    } catch (error) {
      console.error('Error updating data:', error);
      setError('Failed to update contact number. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfileForm;
