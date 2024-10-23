// import React, { useState, useEffect } from 'react';
// import { FaFilePdf, FaDownload, FaTimes } from 'react-icons/fa';
// import Cookies from 'js-cookie';
// import PDFViewer from '../Components/PdfViewer';
// import Layout from '../Components/Layout';

// const Learn = () => {
//   const [selectedPDF, setSelectedPDF] = useState(null);
//   const [pdfData, setPdfData] = useState([]);

//   const api = process.env.REACT_APP_API_URL;
//   const pdfEnv = process.env.REACT_APP_PUBLIC_PROFILE_URL;

//   const token = localStorage.getItem('token')
//   const course = Cookies.get("course")
//   console.log('User Token:', token)

//   useEffect(() => {
//     if (!api) {
//       console.error('API URL is not defined');
//       return;
//     }

//     const getPdfs = async () => {
//       try {
//         const response = await fetch(`${api}notes/getAll`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             'authorization': token
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch PDFs');
//         }

//         const data = await response.json();
//         setPdfData(data.data)
//         console.log('data form first api', data)

//       } catch (error) {
//         console.error('Error fetching PDFs:', error);
//       }
//     };

//     getPdfs();
//   }, [api]);

//   const handleDownload = (url) => {
//     window.open(url, "_blank");
//   };

//   const handleClose = () => {
//     setSelectedPDF(null);
//   };


//   return (
//     <Layout>
//       <section className="mb-8 bg-white p-4 rounded-lg">
//         <div className='flex items-center justify-center underline'>
//           <h2 className="text-xl font-bold mb-4">Your PDFs for {course}</h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//           {pdfData.map((pdf) => {
//             console.log("PDFs Data in mapping:", pdf);
//             let url = `${pdfEnv}${pdf.filePath}`;
//             return (
//               <div
//                 key={pdf.title}
//                 className="cursor-pointer bg-white rounded-lg shadow-lg"
//                 onClick={() => handleDownload(url)}
//               >
//                 <div className="relative">
//                   <iframe
//                     src={url}
//                     className='w-full h-48 object-cover myVideo custom-video opacity-50'
//                     title={pdf.title}
//                   />
//                   <div className='bg-white p-4 rounded-b-lg'>
//                     <h3 className="text-center font-bold mb-2">{pdf.title}</h3>
//                     <div className="flex justify-center">
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleDownload(url);
//                         }}
//                         className="flex items-center justify-center bg-green-500 w-full text-white px-4 py-2 rounded hover:bg-green-600 transition"
//                       >
//                         <FaDownload className="mr-2" /><span>Download</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       <div>
//         {selectedPDF && (
//           <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 p-4">
//             <div className="relative bg-white p-4 rounded-lg w-full max-w-4xl h-full max-h-[90%] overflow-hidden">
//               <button
//                 onClick={handleClose}
//                 className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-2xl"
//               >
//                 <FaTimes />
//               </button>
//               <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">PDF Viewer</h2>
//               <div>
//                 <PDFViewer pdfUrl={selectedPDF} />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </Layout >
//   );
// };

// export default Learn;






import React, { useState, useEffect } from 'react';
import { FaDownload, FaTimes } from 'react-icons/fa';
import Cookies from 'js-cookie';
import PDFViewer from '../Components/PdfViewer';
import Layout from '../Components/Layout';

const Learn = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [pdfData, setPdfData] = useState([]);

  const api = process.env.REACT_APP_API_URL;
  const pdfEnv = process.env.REACT_APP_PUBLIC_PROFILE_URL;
  const token = localStorage.getItem('token');
  const course = Cookies.get("course");

  useEffect(() => {
    const checkFileExists = async (url) => {
      try {
        const response = await fetch(url);
        return response.ok; // Return true if the file exists
      } catch (error) {
        console.error('Error checking file existence:', error);
        return false; // Return false on error
      }
    };

    const getPdfs = async () => {
      try {
        const response = await fetch(`${api}notes/getAll`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'authorization': token,
          },
        });

        if (!response.ok) {
          console.error('API response not okay:', response.status, response.statusText);
          return;
        }

        const data = await response.json();
        
        // Validate and filter the PDFs
        const validPdfData = [];
        for (const pdf of data.data) {
          if (pdf.filePath && pdf.filePath.trim() !== '') {
            const url = `${pdfEnv}${pdf.filePath}`;
            const exists = await checkFileExists(url);
            if (exists) {
              validPdfData.push(pdf); // Only add if the file exists
            }
          }
        }
        setPdfData(validPdfData);
      } catch (error) {
        console.error('Error fetching PDFs:', error);
      }
    };

    if (api) {
      getPdfs();
    } else {
      console.error('API URL is not defined');
    }
  }, [api, token, pdfEnv]);

  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('File not found or has been deleted');
      }
      window.open(url, "_blank");
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Error downloading PDF: ' + error.message);
    }
  };

  const handleView = (url) => {
    setSelectedPDF(url);
  };

  const handleClose = () => {
    setSelectedPDF(null);
  };

  return (
    <Layout>
      <section className="mb-8 bg-white p-4 rounded-lg">
        <div className='flex items-center justify-center underline'>
          <h2 className="text-xl font-bold mb-4">Your PDFs for {course}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {pdfData.map((pdf) => {
            const url = `${pdfEnv}${pdf.filePath}`;
            return (
              <div
                key={pdf.title}
                className="cursor-pointer bg-white rounded-lg shadow-lg"
                onClick={() => handleView(url)}
              >
                <div className="bg-white p-4 rounded-b-lg">
                  <h3 className="text-center font-bold mb-2">{pdf.title}</h3>
                  <div className="flex justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(url);
                      }}
                      className="flex items-center justify-center bg-green-500 w-full text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                      <FaDownload className="mr-2" /><span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedPDF && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-4 rounded-lg w-full max-w-4xl h-full max-h-[90%] overflow-hidden">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-2xl"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">PDF Viewer</h2>
            <PDFViewer pdfUrl={selectedPDF} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Learn;
