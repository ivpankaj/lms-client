import React, { useState, useEffect, useRef } from 'react';
import Cookie from 'js-cookie';
import Layout from '../Components/Layout';

const Classroom = () => {
  const token = Cookie.get('token');
  const [videos, setVideos] = useState([]);
  const [watchedVideos, setWatchedVideos] = useState({});
  const api = process.env.REACT_APP_API_URL;
  const videoEnv = process.env.REACT_APP_PUBLIC_PROFILE_URL;
  const videoRefs = useRef([]);

  const courseId = Cookie.get('courseId');

  useEffect(() => {
    if (!api) {
      console.error('API URL is not defined');
      return;
    }

    const fetchVideos = async () => {
      try {
        const response = await fetch(`${api}video`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        console.log("Video Data:", data.data);

        const filteredVideos = data.data.filter(video => video.courseId === courseId);
        console.log("Filtered Videos:", filteredVideos);

        setVideos(filteredVideos);

      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [api, courseId]);

  useEffect(() => {
    if (!api) {
      console.error('API URL is not defined');
      return;
    }

    const fetchUserActivity = async (fetchedVideos) => {
      try {
        const response = await fetch(`${api}activities`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user activity');
        }

        const data = await response.json();
        console.log("API response data:", data);

        // Parse the activity data
        const watched = data.reduce((acc, entry) => {
          const activityArray = JSON.parse(entry.activity);
          activityArray.forEach((act) => {
            acc[act.videoId] = act.isWatched;
          });
          return acc;
        }, {});

        const updatedWatchedVideos = fetchedVideos.reduce((acc, video) => {
          if (watched[video.id] === undefined) {
            acc[video.id] = false;
          } else {
            acc[video.id] = watched[video.id];
          }
          return acc;
        }, {});

        let lastWatchedIndex = -1;
        for (let i = 0; i < fetchedVideos.length; i++) {
          if (updatedWatchedVideos[fetchedVideos[i].id]) {
            lastWatchedIndex = i;
          } else {
            if (lastWatchedIndex >= 0) {
              updatedWatchedVideos[fetchedVideos[i].id] = false;
            }
            break;
          }
        }

        setWatchedVideos(updatedWatchedVideos);
      } catch (error) {
        console.error('Error fetching user activity:', error);
      }
    };

    if (videos.length > 0) {
      fetchUserActivity(videos);
    }
  }, [api, videos, token]);

  // const handleVideoPlay = async (index) => {
  //   const videoId = videos[index].id;
  //   try {
  //     await fetch(`${api}activity`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //         authorization: token,
  //       },
  //       body: JSON.stringify({
  //         activity:
  //         {
  //           videoId,
  //           isWatched: true,
  //         },
  //       }),
  //     });
  //   } catch (error) {
  //     console.error('Error logging video play activity:', error);
  //   }
  // };

  const handleVideoEnd = async (index) => {
    setWatchedVideos((prev) => ({
      ...prev,
      [videos[index].id]: true,
    }));

    const videoId = videos[index].id;

    try {
      await fetch(`${api}activity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          authorization: token,
        },
        body: JSON.stringify({
          activity:
          {
            videoId,
            isWatched: true,
          },
        }),
      });

      setWatchedVideos((prev) => {
        const nextIndex = index + 1;
        if (nextIndex < videos.length) {
          const updatedVideos = { ...prev };
          updatedVideos[videos[nextIndex].id] = false;
          return updatedVideos;
        }
        return prev;
      });
    } catch (error) {
      console.error('Error updating activity:', error);
    }
  };

  const isVideoLocked = (index) => {
    if (index === 0) return false;
    return !watchedVideos[videos[index - 1]?.id];
  };

  return (
    <Layout>
      <div className="flex flex-col w-full h-full p-4 overflow-y-auto">
        <div className="relative items-center space-y-4">
          {videos.length > 0 && (
            <div className="relative w-full h-80">
              <video
                controls
                controlsList="nodownload"
                src={`${videoEnv}${videos[0]?.filePath}`}
                className="absolute inset-0 w-full h-80 bg-white rounded-lg custom-video"
                ref={(el) => (videoRefs.current[0] = el)}
                // onPlay={() => handleVideoPlay(0)}
                onEnded={() => handleVideoEnd(0)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        <section className="my-4">
          <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((item, index) => {
              let url = `${videoEnv}${item.filePath}`;
              const isDisabled = isVideoLocked(index);

              return (
                <div key={index}>
                  <div className="relative">
                    <video
                      controls={!isDisabled}
                      controlsList="nodownload"
                      src={url}
                      className={`w-full h-48 object-cover myVideo custom-video ${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}
                      ref={(el) => (videoRefs.current[index] = el)}
                      // onPlay={() => handleVideoPlay(index)}
                      onEnded={() => handleVideoEnd(index)}
                    >
                      Your browser does not support the video tag.
                    </video>
                    {isDisabled && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-lg">
                        Watch previous video to unlock
                      </div>
                    )}
                  </div>
                  <div className='bg-white p-4 rounded-b-lg'>
                    <h3 className="text-center font-bold">{item.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Classroom;
