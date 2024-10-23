import Cookies from "js-cookie";
import Swal from "sweetalert2";

const api2 = process.env.NEXT_PUBLIC_API_URL;

export const Login1 = async (userName, password) => {
  try {
  
    const response = await fetch(`${api2}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    Cookies.set("token", data.data.token); 

    Swal.fire({
      title: "Login Successful",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      // Use window.location.href to navigate
      window.location.href = "/home";
    });
  } catch (error) {
    console.error("Login error:", error);
    Swal.fire({
      title: "Error!",
      text: error.message || "An unknown error occurred",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
};
