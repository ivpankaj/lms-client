import Swal from "sweetalert2";

const api2 = process.env.REACT_APP_API_URL; // Use the correct environment variable for React

export default async function UpdatePassword2(password, emailAddress, otp, router) {
  try {
    const response = await fetch(`${api2}student/forgot-password/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ password, emailAddress, otp }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to update password");
    }

    // Password update successful, show a success message
    Swal.fire({
      title: "Password Updated",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });

    // Redirect to login page
    router.push("/");
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
