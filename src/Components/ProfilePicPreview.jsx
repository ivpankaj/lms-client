import React from "react";
import ProfilePicActions from "./ProfilePicActions";

export default function ProfilePicPreview({ file, onCancel, onUpload }) {
  return (
    <>
      <div className="mt-4 flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0" id="file-preview-container">
        <img
          src={URL.createObjectURL(file)}
          alt="Chosen file"
          className="w-32 h-32 object-cover rounded-full border border-gray-300 mb-2 sm:mb-0"
          id="file-preview-image"
        />
        <ProfilePicActions onCancel={onCancel} onUpload={onUpload} />
      </div>
    </>
  );
}
