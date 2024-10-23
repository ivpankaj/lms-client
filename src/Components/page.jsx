import React, { useState, useEffect } from 'react';
import { FaInfoCircle, FaFileUpload } from 'react-icons/fa';

const Page = () => {
    const [projects, setProjects] = useState([]);
    const api = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        if (!api) {
            console.error('API URL is not defined');
            return;
        }

        const fetchProjects = async () => {
            try {
                const response = await fetch(`${api}/project/getbyid/${4}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });

                console.log("Response of Single Project:", response);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }

                const data = await response.json();
                console.log("Response of Data from API:", data);
                setProjects(data || []);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, [api]);

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">Title</h2>
                    <p className="text-gray-600 mt-2">Description</p>
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600">
                        <FaFileUpload />
                        <span>Upload</span>
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600">
                        <FaInfoCircle />
                        <span>Details</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Page;
