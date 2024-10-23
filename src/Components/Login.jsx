import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const api2 = process.env.REACT_APP_API_URL;

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
    Cookies.set("course", data.data.courses[0].name);
    Cookies.set("userId", data.data.id);
    localStorage.setItem('token', data.data.token)

    Swal.fire({
      title: "Login Successful",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      // navigation('/dashboard')
      return 'loginsucces'
      // window.location.href = "/dashboard";
      console.log("User Loggedin")
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

export default function Login() {
  let navigation = useNavigate()

  

  const Login1 = async (userName, password) => {
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
      Cookies.set("course", data.data.courses[0].name);
      Cookies.set("userId", data.data.id);
      Cookies.set("courseId", data.data.userData.courseId);
      localStorage.setItem('token', data.data.token)


      Swal.fire({
        title: "Login Successful",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "/dashboard";
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

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = userName.trim() !== "" && password.trim() !== "";

  const handleLogin = async () => {
    if (isFormValid) {
      setLoading(true);
      try {
        let result = await Login1(userName, password);
        console.log('result', result)
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  }

  return (
    <div
      id="login-container"
      className="h-screen flex items-center justify-center bg-gray-200"
    >
      <div
        id="login-box"
        className="bg-white max-w-sm w-full rounded-3xl shadow-lg p-6 mx-4"
      >
        <div id="logo-section" className="text-center">
          <div className="flex flex-col items-center">
            <img
              src="/logo.png"
              alt="logo"
              className="w-35 h-35 mt-4 object-contain"
            />
            <h1 className="text-2xl font-bold text-gray-800 mt-4">
              SkillOnTime
            </h1>
          </div>
          <p className="text-gray-500 font-semibold mt-2">Student Login</p>
        </div>
        <form id="login-form" className="space-y-4 mt-6">
          <div id="username-section">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow border rounded-xl w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              id="username"
              type="text"
              placeholder="Username"
              value={userName}
              onKeyDown={handleKeyDown}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div id="password-section" className="relative">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow border rounded-xl w-full py-2 px-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onKeyDown={handleKeyDown}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              id="toggle-password"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 mt-8"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
          <div id="actions-section" className="flex flex-col items-center mt-4">
            <button
              className={`w-full ${isFormValid
                ? "bg-gray-500 hover:bg-black"
                : "bg-gray-300 cursor-not-allowed"
                } text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
              type="button"
              onClick={handleLogin}

              disabled={!isFormValid || loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            <a
              id="sign-up"
              className="text-gray-500 hover:text-gray-600 font-bold text-sm mt-2"
              href="/signup"
            >
              Sign Up
            </a>
            <a
              id="forgot-password-link"
              className="text-gray-500 hover:text-gray-600 font-bold text-sm mt-2"
              href="/dashboard/forgetpassword"
            >
              Forgot Password?
            </a>

          </div>
        </form>
        <p id="footer-text" className="text-center text-gray-500 text-xs mt-6">
          &copy; 2024 SkillOnTime.
        </p>
      </div>
    </div>
  );
}