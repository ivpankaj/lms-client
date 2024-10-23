import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const NotesPdf = () => {
    const [notesData, setNotesData] = useState([]);
    const [validNotes, setValidNotes] = useState([]);
    const [error, setError] = useState('');

    const api = process.env.REACT_APP_API_URL;
    const pdfEnv = process.env.REACT_APP_PUBLIC_PROFILE_URL;

    const token = localStorage.getItem('token');
    const course = Cookies.get("course")

    useEffect(() => {
        if (!api) {
            console.error('API URL is not defined');
            return;
        }

        const getNotes = async () => {
            try {
                const response = await fetch(`${api}notes/getAll`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'authorization': token
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch PDFs');
                }

                const data = await response.json();
                const notes = data.data;

                // Check if each PDF file exists
                const validNotesPromises = notes.map(async (item) => {
                    const url = `${pdfEnv}${item.filePath}`;
                    try {
                        // Check if the file exists by making a HEAD request
                        const fileResponse = await fetch(url, { method: 'HEAD' });
                        if (fileResponse.ok) {
                            return item;
                        } else {
                            console.warn(`PDF not found: ${url}`);
                            return null;
                        }
                    } catch (err) {
                        console.error(`Error checking PDF: ${url}`, err);
                        return null;
                    }
                });

                const validNotes = (await Promise.all(validNotesPromises)).filter(Boolean);
                setValidNotes(validNotes);

            } catch (error) {
                setError('Error fetching PDFs');
                console.error('Error fetching PDFs:', error);
            }
        };

        getNotes();
    }, [api, pdfEnv, token]);

    const openPdf = (url) => {
        window.open(url, '_blank');
    };

    if (error) {
        return (
            <section className="mb-8 bg-white p-4 rounded-lg">
                <div className='flex items-center justify-center underline shadow-lg'>
                    <h2 className="text-xl font-bold mb-4 text-red-600">{error}</h2>
                </div>
            </section>
        );
    }

    return (
        <section className="mb-8 bg-white p-4 rounded-lg">
            <div className='flex items-center justify-center underline '>
                <h2 className="text-xl font-bold mb-4">Notes PDF for {course}</h2>
            </div>
            {validNotes.length === 0 ? (
                <div className="text-center text-gray-600">No PDFs available.</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {validNotes.map((item, index) => {
                        let url = `${pdfEnv}${item.filePath}`;
                        return (
                            <div key={index} className="cursor-pointer" onClick={() => openPdf(url)}>
                                <div className="relative">
                                    <iframe
                                        src={url}
                                        className='w-full h-48 object-cover myVideo custom-video opacity-50'
                                        title={item.title}
                                    />
                                </div>
                                <div className='bg-white p-4 rounded-lg shadow-lg '>
                                    <h3 className="text-center font-bold"><span>Title:</span> {item.title}</h3>
                                    <h3 className="text-center font-bold"><span>Topic:</span> {item.topicName}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default NotesPdf;
