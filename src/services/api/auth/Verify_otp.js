import Swal from "sweetalert2";

export default async function Verify_otp(emailAddress, otp, router) {
  const api2 = process.env.REACT_APP_API_URL; // Ensure the correct environment variable for React

  try {
    const response = await fetch(`${api2}student/forgot-password/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        emailAddress,
        otp,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    if (data.status === 200) {
      Swal.fire({
        title: "OTP Verified Successfully",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        router.push(`/update_password?emailAddress=${encodeURIComponent(emailAddress)}&otp=${encodeURIComponent(otp)}`);
      });
    } else {
      throw new Error("Failed to get token from response");
    }
  } catch (error) {
    console.error("Verification error:", error);
    Swal.fire({
      title: "Error!",
      text: error.message || "An unknown error occurred",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
}
