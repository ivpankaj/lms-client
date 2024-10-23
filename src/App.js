import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Login from "./Components/Login";
import Dashboard from './Components/Dashboard'
import About from './Pages/About'
import Certificate from "./Pages/Certificate";
import Classroom from './Pages/Classroom'
import ForgetPassword from './Pages/ForgetPassword'
import Learn from './Pages/Learn'
import GeminiPage from './Pages/Learnai'
import Notes from "./Pages/Note";
import Practice from "./Pages/Practice";
import ReferAndEarn from "./Pages/ReferEarn";
import VerifyOtpPage from "./Pages/VerifyOtp";
import UpdatePasswordPage from "./Pages/UpdatePassword";
import ProfilePage from "./Pages/Profile";
import UpdatePasswordForm from "./Pages/Password";
import ExploreCourses from "./Pages/Courses";
import ExamPage from "./Pages/ExamPage";
import TestPage from "./Pages/TestPage";
import CertificateDetail from './Pages/CertificateDetail';
import Notification from "./Pages/Notification";
import Quiz from "./Pages/Quiz";
import SemesterView from "./Pages/MyCourses";
import Get_user from "./services/api/auth/Get_user";
import ProjectDetails from "./Pages/ProjectDetails";
import Project from "./Pages/Projects";
import Interview from "./Pages/Interview";
import DigitalMarketing from "./Pages/MyCourse2";
import SignupForm from "./Components/SignupForm";
import DigitalMarketingAdv from "./Pages/MyCourses3";


function App() {

  // const token = Cookies.get('token');

  const token = localStorage.getItem('token');

  // const location = useNavigate();

  useEffect(() => {
    // Set up BroadcastChannel
    const channel = new BroadcastChannel('auth_channel');

    const handleMessage = (event) => {
      if (event.data === 'logout') {
        // Perform logout operations here
        fetchUserData(); // Clear token from storage
        window.location.reload(); // Reload to reflect changes
      }
    };

    channel.onmessage = handleMessage;

    // Clean up the channel when the component unmounts
    return () => {
      channel.close();
    };
  }, []);



  const fetchUserData = async () => {
    try {
      const name = await Get_user();
      if (name) {
        console.log(name)
      } else {
        localStorage.clear()
        Cookies.clear()
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard/forgetpassword" element={<ForgetPassword />} />
        {token ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home/interview" element={<Interview />} />
            <Route path="/dashboard/about" element={<About />} />
            <Route path="/dashboard/certificate" element={<Certificate />} />
            <Route path="/dashboard/classroom" element={<Classroom />} />
            <Route path="/dashboard/courses" element={<ExploreCourses />} />
            <Route path="/dashboard/learn" element={<Learn />} />
            <Route path="/dashboard/learnai" element={<GeminiPage />} />
            <Route path="/dashboard/notes" element={<Notes />} />
            <Route path="/dashboard/update-password-form" element={<UpdatePasswordForm />} />
            <Route path="/dashboard/quiz" element={<Quiz />} />
            <Route path="/dashboard/profile" element={<ProfilePage />} />
            <Route path="/dashboard/projects" element={<Project />} />
            <Route path="/dashboard/projects/:id" element={<ProjectDetails />} />
            <Route path="/dashboard/referearn" element={<ReferAndEarn />} />
            <Route path="/dashboard/updatepassword" element={<UpdatePasswordPage />} />
            <Route path="/dashboard/referearn" element={<VerifyOtpPage />} />
            <Route path="/home/test/react" element={<ExamPage />} />
            <Route path="/home/test/node" element={<ExamPage />} />
            <Route path="/home/test/express" element={<ExamPage />} />
            <Route path="/home/test/mongoose" element={<ExamPage />} />
            <Route path="/home/explore_courses" element={<ExploreCourses />} />
            <Route path="/home/fsd" element={<SemesterView />} />
            <Route path="/home/dm" element={<DigitalMarketing />} />
            <Route path="/home/dma" element={<DigitalMarketingAdv />} />
            <Route path="/certificate/:id" element={<CertificateDetail />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>

  );
}

export default App;