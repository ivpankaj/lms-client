import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import CustomPopup from '../Components/CustomPopup'

export default function ForgetPassword() {
  const [contactNumber, setContactNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [timer, setTimer] = useState(10);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const api = process.env.REACT_APP_API_URL;

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(`${api}/send-otp`, {
        contactNumber: contactNumber,
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
    setTimer(10);
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${api}student/reset-password`, {
        password: password,
        contactNumber: contactNumber,
        otp
      });

      console.log(response);

      setSuccessMessage(response.data.message);
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

  const handleConfirm = () => {
    setShowPopup(false);
    navigate('/')
  };

  return (
    <>
      <div id="login-page" className="min-h-screen flex items-center justify-center bg-gray-200">
        <div id="login-container" className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 mx-4">
          <div id="logo-section" className="text-center mb-6">
            <div className="flex justify-center items-center">
              <img
                src="/logo-min.png"
                width={100}
                height={100}
                alt="logo"
                className="mt-10"
              />
              <h1 className="lg:text-3xl font-bold text-gray-800 mt-10 -ml-4">Skill On Time</h1>
            </div>
            <p className="text-gray-500 font-bold mt-2 text-xl">Forget Password</p>
          </div>
          <form onSubmit={handleSubmit} id="otp-form" className="space-y-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                Contact Number
              </label>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                  disabled={otpSent && timer > 0}
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className={`bg-green-400 hover:bg-green-300 p-2 rounded-lg text-gray-600 ${otpSent && timer > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={otpSent && timer > 0}
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
                  disabled={otpVerified}
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                New Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
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

            <div id="otp-button-section" className="flex flex-col items-center">
              <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-400 w-full text-white font-bold py-2 px-4 rounded-full`}
              >
                Reset Password
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
        <div>
          {showPopup && (
            <CustomPopup
              title="Success!"
              message="Password Reset Successfully"
              onConfirm={handleConfirm}
            />
          )}
        </div>
      </div >
    </>
  );
}