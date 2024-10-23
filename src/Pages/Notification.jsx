import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout';

import Cookies from 'js-cookie';



const NotificationList = () => {
    const apiUrl = process.env.REACT_APP_API_URL;

  const [notifications, setNotifications] = useState([]);

  const token = Cookies.get('token') || '';

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${apiUrl}students/notifications/all`, {
          headers: { 'Authorization': token }
        });
        setNotifications(response.data.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [apiUrl, token]);

  const markAsRead = async (id) => {
    try {
      await axios.put(`${apiUrl}/api/admin/notifications/${id}`, {
        isRead: true
      }, {
        headers: { 'Authorization': token }
      });
      setNotifications((prevNotifications) =>
        prevNotifications.map((notif) =>
          notif.id === id ? { ...notif, isRead: true } : notif
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-100 rounded-lg py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Notifications</h2>
          <div className="space-y-4">
            {notifications.length > 0 ? notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg shadow-md bg-white transition-all hover:shadow-lg ${notification.isRead ? "opacity-60" : ""}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex justify-between items-center">
                  <p className={`text-lg font-medium ${notification.isRead ? "text-gray-500" : "text-gray-800"}`}>
                    {notification.message}
                  </p>
                  <p className="text-sm text-gray-400">
                    {new Date(notification.createdAt).toLocaleString()} {/* Convert and format the date */}
                  </p>
                </div>
                {!notification.isRead && (
                  <div className="mt-2">
                    <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  </div>
                )}
              </div>
            )) : <h3>no notifications</h3>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotificationList;
