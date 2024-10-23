import Swal from "sweetalert2";

const api = process.env.REACT_APP_API_URL; // Use the correct environment variable for React

export default async function Get_otp(emailAddress, router) {
  try {
    const response = await fetch(`${api}student/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ emailAddress }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send OTP");
    }

    Swal.fire({
      title: "OTP sent successfully",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });

    router.push(`/verify_otp?emailAddress=${encodeURIComponent(emailAddress)}`);
  } catch (error) {
    console.error("OTP request error:", error);

    Swal.fire({
      title: "Error!",
      text: error.message || "An unknown error occurred",
      icon: "error",
      confirmButtonText: "Try Again",
    });

    router.push("/forget_password");
  }
}
