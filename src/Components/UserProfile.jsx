// import React, { useEffect, useState, useCallback, useRef } from 'react';
// import Cookie from 'js-cookie';
// import { useNavigate, useLocation, Link } from 'react-router-dom'; // React Router v6
// import Swal from 'sweetalert2';
// import { FaUser, FaCertificate, FaLock, FaSignOutAlt } from 'react-icons/fa';
// import { IoIosNotifications } from "react-icons/io";
// import Get_user from '../services/api/auth/Get_user';

// export default function UserProfile() {
//   const [initial, setInitial] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dropdownRef = useRef(null); // Reference for dropdown element

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const name = await Get_user();
//         if (name) {
//           setInitial(name.charAt(0).toUpperCase());
//         }
//       } catch (error) {
//         console.error('Failed to fetch user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

//   const handleLogout = useCallback(async () => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will be logged out of your account.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, log out!',
//       cancelButtonText: 'Cancel',
//     });

//     if (result.isConfirmed) {
//       Cookie.remove('token');
//       localStorage.clear()
//       Cookie.remove('course');
//       Cookie.remove('course');
//         // Notify other tabs/windows about the logout
//     const channel = new BroadcastChannel('auth_channel');
//     channel.postMessage('logout');
//     channel.close();

//     // Redirect to the login page
//       navigate('/'); // navigate to the homepage after logging out
//       Swal.fire('Logged out!', 'You have been logged out successfully.', 'success');
//     }
//   }, [navigate]);

//   // Effect to close the dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
    
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [dropdownRef]);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold"
//         id="user-profile-button"
//       >
//         {initial}
//       </button>
//       {isOpen && (
//         <div
//           ref={dropdownRef} // Attach ref to dropdown element
//           className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
//           id="user-profile-dropdown"
//         >
//           <ul className="py-2">
//             <li>
//               <Link
//                 to="/dashboard/profile"
//                 className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
//               >
//                 <FaUser className="mr-2" />
//                 My Profile
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/notification"
//                 className="flex items-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//               >
//                 <IoIosNotifications className="mr-2 text-2xl" />
//                 My Notifications
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard/certificate"
//                 className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
//               >
//                 <FaCertificate className="mr-2" />
//               My Certificates
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard/updatepassword"
//                 className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
//               >
//                 <FaLock className="mr-2" />
//                 Manage Passwords
//               </Link>
//             </li>
//             <li>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center px-4 py-2 w-full text-left text-gray-800 hover:bg-gray-100"
//               >
//                 <FaSignOutAlt className="mr-2" />
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useEffect, useState, useCallback, useRef } from 'react';
import Cookie from 'js-cookie';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaUser, FaCertificate, FaLock, FaSignOutAlt, FaBell } from 'react-icons/fa'; // Using all Font Awesome icons
import Get_user from '../services/api/auth/Get_user';
import StudyBar from './Study_bar';

export default function UserProfile() {
  const [initial, setInitial] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const name = await Get_user();
        if (name) {
          setInitial(name.charAt(0).toUpperCase());
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleLogout = useCallback(async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of your account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      Cookie.remove('token');
      localStorage.clear();
      Cookie.remove('course');

      const channel = new BroadcastChannel('auth_channel');
      channel.postMessage('logout');
      channel.close();

      navigate('/');
      Swal.fire('Logged out!', 'You have been logged out successfully.', 'success');
    }
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);










  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="relative">


      
      <button
        onClick={toggleDropdown}
        className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold"
        id="user-profile-button"
      >
        {initial}
      </button>
      {isOpen && (

       <>



        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
          id="user-profile-dropdown"
        >


<div
  onClick={handleOpenPopup}
  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 transition duration-200 cursor-pointer transform hover:scale-105"
>
  My Goal
</div>


          <ul className="py-2">
            <li>
              <Link
                to="/dashboard/profile"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaUser className="mr-2 text-lg" />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/notification"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaBell className="mr-2 text-lg" />
                My Notifications
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/certificate"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaCertificate className="mr-2 text-lg" />
                My Certificates
              </Link>
            </li>
          
            <li>
              <Link
                to="/dashboard/updatepassword"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaLock className="mr-2 text-lg" />
                Manage Passwords
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 w-full text-left text-gray-800 hover:bg-gray-100"
              >
                <FaSignOutAlt className="mr-2 text-lg" />
                Logout
              </button>
            </li>
          </ul>
        </div>
        </>
      )}

{isPopupVisible && <StudyBar onClose={handleClosePopup} />}
    </div>
  );
}
