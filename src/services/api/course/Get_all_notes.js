import Cookies from "js-cookie";
import Swal from "sweetalert2";

const api = process.env.REACT_APP_API_URL; // Ensure you have the correct environment variable for React

export const Get_all_notes = async () => {
  try {
    const token = Cookies.get("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${api}notes/getAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Use Bearer prefix if required by your API
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch data");
    }

    return data; // Adjust according to your API response structure
  } catch (error) {
    console.error("Error fetching user data:", error);
    Swal.fire({
      title: "Error!",
      text: error.message || "An unknown error occurred",
      icon: "error",
      confirmButtonText: "Try Again",
    });
    return null;
  }
};
