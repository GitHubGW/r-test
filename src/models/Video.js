import mongoose from "mongoose";

const { Schema } = mongoose;

const videoSchema = new Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashTags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const videoModel = mongoose.model("Video", videoSchema);

export default videoModel;
