import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const MeetingLink = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchMeetings = async () => {
      const courseId = Cookies.get("courseId"); // Get courseId from cookies

      if (!courseId) {
        setError("Course ID not found in cookies.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${api}/meeting/getall/${courseId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch meetings");
        }
        const data = await response.json();
        setMeetings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 w-full mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Meeting List</h2>
      {meetings.length === 0 ? (
        <p className="text-gray-600">No meetings found.</p>
      ) : (
        <ul className="flex flex-wrap space-x-4 space-y-4">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="flex-1 min-w-[300px] p-4 border rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {meeting.title}
              </h3>
              <p className="text-gray-700 mb-2">{meeting.description}</p>
              <a
                href={meeting.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-blue-600"
              >
                Join Meeting
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Created At: {new Date(meeting.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
};

export default MeetingLink;
