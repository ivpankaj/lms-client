import Cookies from "js-cookie";
import Swal from "sweetalert2";
const api = process.env.REACT_APP_API_URL

export default async function  Get_user () {
  try {

    const token = Cookies.get("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${api}student/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`, // Use Bearer prefix if required by your API
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch data");
    }

    if (data.data.status === true) {
      return data.data.name; // Adjust according to your API response structure
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    Cookies.remove('token')
    // Swal.fire({
    //   title: "Error!",
    //   text: error.message || "An unknown error occurred",
    //   icon: "error",
    //   confirmButtonText: "Try Again",
    // });
    return null;
  }
};
