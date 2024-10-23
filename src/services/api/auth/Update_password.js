import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const api2 = process.env.REACT_APP_API_URL; // Ensure the correct environment variable for React

export default async function Update_password(oldPassword, newPassword, router) {
  try {
    const token = Cookies.get("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${api2}password/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    Swal.fire({
      title: "Success!",
      text: "Your password has been updated.",
      icon: "success",
      confirmButtonText: "Go to Login Page",
    }).then(() => {
      router.push('/');
    });

  } catch (error) {
    console.error("Password update error:", error);
    Swal.fire({
      title: "Error!",
      text: error.message || "An unknown error occurred",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
}
