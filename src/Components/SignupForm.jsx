import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import CustomPopup from './CustomPopup'

const SignupForm = () => {
  const api = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    courseIds: '',
    contactNumber: '',
    emailAddress: '',
    referbyId: '',
    name: '',
    password: '',
  });
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [timer, setTimer] = useState(10);
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${api}/student/free/get/course`);
        setCourses(response.data.data.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, [api]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(`${api}/send-otp`, {
        contactNumber: formData.contactNumber,
      });
      if (response.data.success) {
        console.log('OTP Response:', response.data);
        setOtpSent(true);
        setErrors({});
        setSuccessMessage('OTP successfully sent.');
        startTimer();
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setErrors({ message: 'Failed to send OTP.' });
    }
  };

  const startTimer = () => {
    setTimer(10); // Reset timer to 10 seconds
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0; // Stop the timer at 0
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(`${api}/verify-otp`, {
        contactNumber: formData.contactNumber,
        otp,
      });
      console.log("Response from verify otp:", response);

      if (response.status === 200) {
        setOtpVerified(true);
        setSuccessMessage('OTP verified successfully');
        setErrors({});
      } else {
        setErrors({ message: 'Invalid OTP. Please try again.' });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setErrors({ message: 'Error verifying OTP.' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      setErrors({ message: 'Please verify the OTP first.' });
      return;
    }

    console.log('Form Data:', formData);
    try {
      const response = await axios.post(`${api}/student/free/create`, formData);
      setSuccessMessage(response.data.message);
      setFormData({});
      setShowPopup(true)
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors({ message: error.response.data.message });
      } else {
        console.error('Error submitting form:', error);
        setErrors({ message: 'Error submitting form' });
      }
    }
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  const handleConfirm = () => {
    setShowPopup(false);
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {errors.message && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {errors.message}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            {successMessage}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
              disabled={otpSent && timer > 0 || otpVerified} // Disable if OTP is sent and timer is active or OTP is verified
            />
            <button
              type="button"
              onClick={handleSendOtp}
              className={`bg-green-400 hover:bg-green-300 p-2 rounded-lg text-gray-600 ${otpSent && timer > 0 || otpVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={otpSent && timer > 0 || otpVerified} // Disable if OTP is sent and timer is active or OTP is verified
            >
              Send OTP
            </button>
            {otpSent && (
              <div className="text-green-600">
                OTP sent! Wait for {timer} seconds to resend.
              </div>
            )}
          </div>
        </div>

        {otpSent && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
              disabled={otpVerified} // Disable OTP input if verified
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              className={`bg-blue-400 hover:bg-blue-300 p-2 rounded-lg mt-2 text-gray-600 ${otpVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={otpVerified} // Disable if OTP is verified
            >
              Verify OTP
            </button>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseIds">
            Courses
          </label>
          <select
            id="courseIds"
            name="courseIds"
            value={formData.courseIds}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded ${!otpVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!otpVerified}
        >
          Sign Up
        </button>

      </form>
      <p className="mt-4">
        Already have an account?{' '}
        <span onClick={handleLoginRedirect} className="text-blue-500 cursor-pointer">
          Login
        </span>
      </p>
      <div>
        {showPopup && (
          <CustomPopup
            title="Success!"
            message="User Created Successfully!"
            onConfirm={handleConfirm}
          />
        )}
      </div>
    </div>
  );
};

export default SignupForm;