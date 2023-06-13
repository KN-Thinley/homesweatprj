import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./video.css";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch("/admin/getAll");
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-black">
        <h1 className="font-sans text-4xl text-white text-center">
          Available Videos
        </h1>
        <div className="video-list grid lg:grid-cols-3 font-sans gap-4 pt-12">
          {videos.map((video) => (
            <div
              key={video._id}
              className="flex flex-col justify-center items-center"
            >
              <div className="video" style={{ maxWidth: "800px" }}>
                <ReactPlayer url={video.video_url} controls width="100%" />
              </div>
              <h2 className="text-white text-3xl font-sans">
                {video.video_title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoList;
