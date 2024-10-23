import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout';

const CertificateDetail = () => {
  const { id } = useParams(); 

  const certificateImages = {
    1: '/NewCertificate.jpg',
    2:'/NewCertificate.jpg',
    3: '/NewCertificate.jpg',
  };

  const certificateImage = certificateImages[id];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Certificate Detail</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          {certificateImage ? (
            <>
            <img src={certificateImage} alt={`Certificate ${id}`} className="w-[600px] h-auto rounded shadow-md mb-4" />
            <a
            href={certificateImage} 
            download={`Certificate_${id}.png`}
            className=" bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600 transition-colors"> Download Now</a>
            </>

          ) : (
            <p className="text-gray-500">Certificate not found.</p>
          )}
         
        </div>
        
      </div>
     
    </Layout>
  );
};

export default CertificateDetail;
