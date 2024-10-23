import React, { useEffect, useState } from 'react';
import getProfilePic from '../services/api/auth/Get_profile_pic'; // Adjust import path as needed
import getUser from '../services/api/auth/Get_user'; // Adjust import path as needed

const profileEnv = process.env.REACT_APP_PUBLIC_PROFILE_URL; // Use React's environment variable

console.log(profileEnv, "hi");

export default function GreetingSection({ greeting = "Hello", user = {} }) {
  const [profilePic, setProfilePic] = useState('');
  const [initial, setInitial] = useState('');

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const photoUrl = await getProfilePic();

        if (!profileEnv) {
          console.error("profileEnv is not set or invalid");
          return;
        }

        if (!photoUrl) {
          // Use a default profile picture if the user has not uploaded one
          setProfilePic(`${profileEnv}/default-profile-pic.jpg`);
        } else {
          try {
            const fullUrl = new URL(photoUrl, profileEnv).toString();
            setProfilePic(fullUrl);
          } catch (urlError) {
            console.error("Error constructing URL:", urlError);
            // Fallback to default profile picture on URL construction error
            setProfilePic(`${profileEnv}/default-profile-pic.jpg`);
          }
        }
      } catch (error) {
        console.error("Failed to fetch profile photo:", error);
        // Fallback to default profile picture on fetch error
        setProfilePic(`${profileEnv}/default-profile-pic.jpg`);
      }
    };

    fetchProfilePhoto();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const name = await getUser();
        if (name) {
          setInitial(name.charAt(0).toUpperCase());
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const userName = user?.name || 'User';

  return (
    <div className="flex items-center space-x-4 p-4 bg-white w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="relative rounded-full overflow-hidden border-2 border-gray-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
        {profilePic ? (
          <img
            src={profilePic}
            alt={initial || userName.charAt(0)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-500 flex items-center justify-center rounded-full">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              {initial || userName.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1">
        <h2 className="text-base sm:text-xl md:text-xl lg:text-lg font-semibold text-black">
          {greeting}, {userName}
        </h2>
      </div>
    </div>
  );
}
