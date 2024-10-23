import React, { useEffect, useState } from 'react';

export default function VideoCard({ apiEndpoint, title }) {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error('Failed to fetch video');
        }
        const videoBlob = await response.blob(); // get the response as a Blob
        const videoObjectUrl = URL.createObjectURL(videoBlob); // create a URL for the video
        setVideoUrl(videoObjectUrl);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoUrl();
  }, [apiEndpoint]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {videoUrl ? (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <video
            width="100%"
            height="200"
            src={videoUrl}
            controls
            controlsList="nodownload"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      ) : (
        <div>No video available</div>
      )}
    </>
  );
}
