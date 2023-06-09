import ReactPlayer from "react-player";

const SingleVideoPage = ({ video }) => {
  return (
    <div>
      <h2>{video.video_title}</h2>
      <ReactPlayer url={video.video_url} controls={true} />
      <p>{video.video_description}</p>
    </div>
  );
};

export default SingleVideoPage;
