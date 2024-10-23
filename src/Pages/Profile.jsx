import React, { useEffect, useState, Suspense } from "react";
import Get_user_data from "../services/api/auth/Get_user_data";
import Layout from "../Components/Layout";
import EditProfileForm from "../Components/EditProfileForm";
import ProfilePic from "../Components/ProfilePic";
import ProfileDetails from "../Components/ProfileDetails";


export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Get_user_data();
        if (response) {
          setUserData(response);
        } else {
          setError("No user data found");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <Layout>
      <div className=" w-full flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Main Profile Content */}
        <div className="bg-white w-full rounded-3xl shadow-lg transition-transform duration-300 hover:shadow-xl sm:w-full lg:w-full'/NewCertificate.jpg' overflow-hidden">
          <div className="  flex flex-col items-center py-6 bg-gradient-to-b from-purple-200 to-indigo-400">
            <Suspense fallback={<p>Loading Profile Picture...</p>}>
              <ProfilePic />
            </Suspense>
            <button
              onClick={toggleEditForm}
              className="mt-4 px-6 py-2 border border-gray-300 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 ease-in-out transform hover:scale-105"
            >
              {showEditForm ? "Hide Edit Form" : "Edit"}
            </button>
          </div>

          {/* Conditional rendering of the Edit Form */}
          {showEditForm && userData && (
            <div className="mt-6 p-6 transition-opacity duration-500 ease-out opacity-100">
              <Suspense fallback={<p>Loading Edit Form...</p>}>
                <EditProfileForm userData={userData} />
              </Suspense>
            </div>
          )}

          {/* Profile Details Section */}
          <div className="mt-6 p-6">
            <Suspense fallback={<p>Loading Profile Details...</p>}>
              <ProfileDetails userData={userData} />
            </Suspense>
          </div>
        </div>

        {/* Profile Bar on the Right */}
    
      </div>
    </Layout>
  );
}
