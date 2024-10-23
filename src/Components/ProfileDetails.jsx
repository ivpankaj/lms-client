import React from "react";
import { FaUser, FaIdBadge, FaEnvelope, FaPhone, FaRegNewspaper } from "react-icons/fa";

export default function ProfileDetails({ userData }) {
  return (
    <div className="space-y-6 ">
      <div className="flex items-center space-x-4">
        <FaUser className="text-gray-600 text-[1.8rem]" />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Name</h1>
          <p className="text-base text-gray-700">
            {userData?.name}{" "}
            <span className="text-sm text-red-500">
              (This will be shown in Certificate)
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FaIdBadge className="text-gray-600 text-[1.8rem]" />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Student ID</h1>
          <p className="text-base text-gray-700">{userData?.studentId}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-gray-600 text-[1.8rem]" />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Email</h1>
          <p className="text-base text-gray-700">{userData?.emailAddress}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FaPhone className="text-gray-600 text-[1.8rem]" />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Mobile Number</h1>
          <p className="text-base text-gray-700">{userData?.contactNumber}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FaRegNewspaper className="text-gray-600 text-[1.8rem]" />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Course Name</h1>
          <p className="text-base text-gray-700">{userData?.courseName}</p>
        </div>
      </div>
    </div>
  );
}
