import React from "react";

export default function ProfilePicActions({ onCancel, onUpload }) {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-2" id="file-action-buttons">
      <button
        onClick={onCancel}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 mb-2 sm:mb-0"
        id="cancel-button"
      >
        Cancel
      </button>
      <button
        onClick={onUpload}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600"
        id="upload-button"
      >
        Upload
      </button>
    </div>
  );
}
