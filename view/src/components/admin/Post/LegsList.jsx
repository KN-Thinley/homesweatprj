import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import SingleVideoPage from "./SingleVideoPage";

const LegsList = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoClicked, setVideoClicked] = useState(false);

  useEffect(() => {
    fetch("/admin/getAll/legs")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.log(error));
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setVideoClicked(true);
  };

  return (
    <div>
      <div className="video-list grid md:grid-cols-2">
        {videoClicked && selectedVideo ? (
          <SingleVideoPage video={selectedVideo} />
        ) : (
          videos.map((video) => (
            <div
              key={video._id}
              className="video-item"
              onClick={() => handleVideoClick(video)}
            >
              <Link to={`/videos/chest/${video._id}`}>
                <div className="flex flex-col ">
                  <h2>{video.video_title}</h2>
                  <ReactPlayer url={video.video_url} controls={true} />
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LegsList;
