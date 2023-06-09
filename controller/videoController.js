const videoModel = require("../model/videoModel");

const addVideo = async (req, res) => {
  try {
    const { video_title, video_url, video_description, workout_type } =
      req.body;
    console.log("At try");
    const newVideo = new videoModel({
      video_title,
      video_url,
      video_description,
      workout_type,
    });
    console.log("new video", newVideo);

    await newVideo.save();
    res.status(200).json(newVideo);
  } catch (error) {
    console.error("error from db", error);
    res.status(500).json({ error: "Unable to add video" });
  }
};

const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { video_title, video_url, video_description, workout_type } =
      req.body;
    const updateVideo = await videoModel.findByIdAndUpdate(
      id,
      { video_title, video_url, video_description, workout_type },
      { new: true }
    );
    if (!updateVideo) {
      return res.status(404).json({ message: "video not found" });
    }
    res.json(updateVideo);
  } catch (error) {
    res.status(500).json({ error: "Unable to update video" });
  }
};
const deleteVideo = async (req, res) => {
  try {
    await videoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Unable to delete video" });
  }
};
const getOneVideo = async (req, res) => {
  try {
    const video = await videoModel.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch video" });
  }
};

const getAllVideo = async (req, res) => {
  try {
    const workoutType = req.params.workout_type;
    const videos = await videoModel.find({ workout_type: workoutType });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEveryVideo = async (req, res) => {
  try {
    const videos = await videoModel.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addVideo,
  updateVideo,
  deleteVideo,
  getOneVideo,
  getAllVideo,
  getEveryVideo,
};
