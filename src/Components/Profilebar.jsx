import React, { useEffect, useState } from 'react';
import GreetingSection from './GreetingSection'; // Ensure this component is properly imported
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';

const getGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

const api = process.env.REACT_APP_API_URL;

async function Get_user_data() {
  try {
    const token = Cookies.get("token");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await fetch(`${api}student/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch data");
    }

    if (data.data.status === true) {
      return data.data;
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    Cookies.remove("token");
    return null;
  }
}

export default function Profilebar({ user }) {
  const [user1, setUser1] = useState(user); // Initialize user state
  const [error, setError] = useState(null); // Initialize error state
  const [loading, setLoading] = useState(true); // Initialize loading state

  const greeting = getGreeting();
  const course = Cookies.get('course'); // Get cookie value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUser = await Get_user_data();
        setUser1(fetchedUser);
        console.log(fetchedUser);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs once on mount

  if (loading) {
    return <p>Loading...</p>; // Simple loading state
  }

  if (error) {
    return <p>{error}</p>; // Error state display
  }

  return (
    <aside className="w-full md:w-64 bg-white p-6 shadow rounded-2xl md:rounded-3xl space-y-8 sticky">
      <GreetingSection greeting={greeting} user={user1} />

      {/* Centered Button with Animation */}
      <motion.section
        className="flex justify-center items-center" // Center the button horizontally
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button className="bg-red-400 text-white p-2 md:p-2 lg:p-4 rounded-lg shadow-lg hover:bg-red-500 transition-colors duration-300 text-sm md:text-base lg:text-lg">
          {course}
        </button>
      </motion.section>

      {/* User Stats Section */}
      <motion.section
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Add content for user stats here */}
      </motion.section>

      {/* Additional Content Section */}
      <motion.section
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Upcoming Events</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li className="text-lg text-gray-700 dark:text-gray-300">Event 1: 12/08/24</li>
          <li className="text-lg text-gray-700 dark:text-gray-300">Event 2: 02/09/24</li>
          <li className="text-lg text-gray-700 dark:text-gray-300">Event 3: 03/10/24</li>
        </ul>
      </motion.section>
    </aside>
  );
}
