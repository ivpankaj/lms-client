import Cookies from "js-cookie";

const api = process.env.REACT_APP_API_URL;

export default async function Get_profile_pic() {
  const token = Cookies.get("token");

  if (!api) {
    console.error("API URL is not defined");
    return "";
  }

  try {
    console.log("API URL:", api);

    const response = await fetch(`${api}profile-photo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        Accept: "application/json",
      },
    });

    console.log("user profile response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch profile photo");
    }

    const data = await response.json();
    console.log("Profile Picture Data", data);
    if (data.profilePhoto) {
      return data.profilePhoto;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching profile photo:", error);
    return "";
  }
}
