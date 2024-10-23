import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import Get_profile_pic from "../services/api/auth/Get_profile_pic";
import Get_user from "../services/api/auth/Get_user";

const ProfilePicButton = lazy(() => import('./ProfilePicButton'));
const ProfilePicPreview = lazy(() => import('./ProfilePicPreview'));

export default function ProfilePic() {
  const [profilePic, setProfilePic] = useState(null);
  const [file, setFile] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [initial, setInitial] = useState(null);
  // const token = Cookies.get("token");
  let token =  localStorage.getItem('token')
  
  const api = process.env.REACT_APP_API_URL;
  const profileEnv = process.env.REACT_APP_PUBLIC_PROFILE_URL;

  const fetchProfilePhoto = useCallback(async () => {
    try {
      const photoUrl = await Get_profile_pic();
      console.log(photoUrl,"bye")
      if (photoUrl) {
        setProfilePic(`${profileEnv}${photoUrl}`);
       
      } else {
        setProfilePic('https://skillontime.com/bg3.png');
      }
    } catch (error) {
      console.error('Failed to fetch profile photo:', error);
    }
  }, [profileEnv]);

  const fetchUserData = useCallback(async () => {
    try {
      const name = await Get_user();
      if (name) {
        setInitial(name.charAt(0).toUpperCase());
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  }, []);

  useEffect(() => {
    fetchProfilePhoto();
    fetchUserData();
  }, [fetchProfilePhoto, fetchUserData]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const maxSizeInBytes = 5 * 1024 * 1024;

      if (selectedFile.size > maxSizeInBytes) {
        Swal.fire({
          title: "Error!",
          text: "File size exceeds 5 MB limit.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      setFile(selectedFile);
      setShowActions(true);
    }
  };

  const handleProfilePicChange = async () => {
    if (!file) {
      Swal.fire({
        title: "Error!",
        text: "No file selected",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!token) {
      Swal.fire({
        title: "Error!",
        text: "No token found",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData();
    formData.append("studentProfile", file);

    try {
      const response = await fetch(`${api}student/profilephoto`, {
        method: "POST",
        headers: {
          Authorization: `${token}`,
          "Access-Control-Allow-Origin": "*",
        },
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to update profile picture");
      }

      setProfilePic(data.profilePic);
      setFile(null);
      setShowActions(false);
      Swal.fire({
        title: "Success!",
        text: "Profile picture updated.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.reload()
      });
    } catch (error) {
      // Swal.fire({
      //   title: "Error!",
      //   text: error.message || "An unknown error occurred",
      //   icon: "error",
      //   confirmButtonText: "Try Again",
      // });
    }
  };

  const handleCancel = () => {
    setFile(null);
    setShowActions(false);
  };

  return (
    <div className="flex flex-col items-center mb-4" id="profile-pic-container">
      <div className="flex flex-col items-center" id="profile-pic-inner-container">
        <Suspense fallback={<div>Loading...</div>}>
          <ProfilePicButton initial={initial || ''} profilePic={profilePic} onFileChange={handleFileChange} />
          {showActions && file && (
            <ProfilePicPreview
              file={file}
              onCancel={handleCancel}
              onUpload={handleProfilePicChange}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
}
