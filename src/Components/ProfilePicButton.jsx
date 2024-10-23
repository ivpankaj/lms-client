import React from "react";

export default function ProfilePicButton({ profilePic, onFileChange, initial }) {
  return (
    <>
      <button
        className="relative w-24 h-24 bg-white text-white flex items-center justify-center rounded-full overflow-hidden border-2 border-gray-300"
        onClick={() => document.getElementById("fileInput")?.click()}
        id="profile-pic-button"
      >
        {profilePic ? (
          <img src={profilePic} alt="Profile Picture" className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center text-xl font-bold text-white">{initial}</div>
        )}
      </button>
      <button
        onClick={() => document.getElementById("fileInput")?.click()}
        className="mt-2 text-gray-900 font-semibold rounded-md hover:underline"
        id="change-pic-button"
      >
        Change Profile Pic
      </button>
      <input
        id="fileInput"
        type="file"
        onChange={onFileChange}
        className="hidden"
      />
    </>
  );
}
