const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  video_title: {
    type: String,
  },
  video_url: {
    type: String,
  },
  video_description: {
    type: String,
  },
  workout_type: {
    type: String,
  },
});
const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
