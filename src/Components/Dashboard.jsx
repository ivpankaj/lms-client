// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import CoreSol from "./CoreSol";
// import HeroSection from "./HeroSection";
// import StatsSection from "./StatsSection";
// import Layout from "./Layout";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import GraphsContainer from "./Graphcontainer";
// import Profilebar from "../Components/Profilebar";

// const api = process.env.REACT_APP_API_URL;

// async function Get_user_data() {
//   try {
//     // const token = Cookies.get("token");
//     let token =  localStorage.getItem('token')
//     // alert(token2)
//     // console.log(token)
//     if (!token) {
//       throw new Error("No token found");
//     }
//     const response = await fetch(`${api}student/get`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `${token}`,
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Failed to fetch data");
//     }

//     if (data.data.status === true) {
//       console.log('getitng user data profile in dashboard',data.data)
//       return data.data;
//     } else {
//       throw new Error("Failed to fetch user data");
//     }
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     Cookies.remove("token");
//     return null;
//   }
// }

// export default function DashboardPage() {
//   const [user1, setUser1] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [calendarOpen, setCalendarOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const user = await Get_user_data();
//         setUser1(user);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString("en-GB");
//   };

//   const stats = [
//     ["Chapters Completed", "8/10"],
//     ["Chapters in Progress", "2/10"],
//     ["Upcoming test", formatDate(selectedDate)],
//   ];

//   const toggleCalendar = () => {
//     setCalendarOpen(!calendarOpen);
//   };

//   return (
//     <Layout>
//       <div className="flex flex-col h-screen ">
//         {/* Main Content */}
//         <div className="flex flex-col flex-1 p-4">
//           <div className="flex flex-col md:flex-row w-full flex-1">
//             {/* Left Column for CoreSol and HeroSection */}
//             <div className="flex flex-col flex-1 mb-4 md:mb-0">
//               <CoreSol />
//               <HeroSection />
//             </div>

//             {/* Right Column for Profilebar */}
//             <div className="hidden md:block w-full md:w-1/3 lg:w-1/4 md:ml-6 mt-4 md:mt-0">
//               {/* <Profilebar user={user1} stats={stats} /> */}
//             </div>
//           </div>

//           {/* Full-width GraphsContainer Section */}
//           {/* <div className="w-full mt-4">
//             <GraphsContainer />
//           </div> */}

//           {/* Full-width Stats Section */}
//           {/* <div className="w-full mt-4">
//             <StatsSection stats={stats} toggleCalendar={toggleCalendar} />
//           </div> */}
//         </div>

//         {/* Profilebar for Small Screens */}
//         {/* <div className="block md:hidden w-full bg-white shadow-lg z-50">
//           <Profilebar user={user1} stats={stats} />
//         </div> */}
//       </div>

//       {/* Calendar Popup */}
//       {calendarOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/13 max-w-md">
//             <h2 className="text-lg font-bold mb-4">Select Date</h2>
//             <DatePicker
//               selected={selectedDate}
//               onChange={(date) => setSelectedDate(date)}
//               inline
//             />
//             <button
//               onClick={toggleCalendar}
//               className="ml-8 mt-2 px-12 py-2 flex items-center bg-blue-500 text-white rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// }



import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CoreSol from "./CoreSol";
import HeroSection from "./HeroSection";
import Layout from "./Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Meeting_link from "../Pages/Meeting_link";

const api = process.env.REACT_APP_API_URL;

async function Get_user_data() {
  try {
    let token = localStorage.getItem('token');
    if (!token) {
      throw new Error("No token found");
    }
    const response = await fetch(`${api}student/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch data");
    }

    if (data.data.status === true) {
      return data.data;
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    Cookies.remove("token");
    return null;
  }
}

export default function DashboardPage() {
  const [user1, setUser1] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await Get_user_data();
        setUser1(user);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB");
  };

  const stats = [
    ["Chapters Completed", "8/10"],
    ["Chapters in Progress", "2/10"],
    ["Upcoming test", formatDate(selectedDate)],
  ];

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <Layout>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Main Content */}
        <div className="flex flex-col flex-1 p-4">
          <div className="flex flex-col md:flex-row w-full flex-1 mb-4">
            {/* Left Column for CoreSol and HeroSection */}
            <div className="flex flex-col flex-1">
              <CoreSol />
              <HeroSection />
              <Meeting_link/>
            </div>

            {/* Right Column for Profilebar */}
           
          </div>
        </div>

        {/* Profilebar for Small Screens */}
     
      </div>

      {/* Calendar Popup */}
      {calendarOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-lg font-bold mb-4">Select Date</h2>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
            />
            <button
              onClick={toggleCalendar}
              className="ml-8 mt-2 px-6 py-2 flex items-center bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
