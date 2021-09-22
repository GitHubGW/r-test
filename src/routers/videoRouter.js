import express from "express";
import { hanldeVideo, handleGetEditVideo, handlePostEditVideo, hanldeDeleteVideo, handleUploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();

// Regular Expression
// (\w+): All String, Number
// (\d+): Only Number
videoRouter.get("/:id(\\d+)", hanldeVideo);
videoRouter.route("/:id(\\d+)/edit").get(handleGetEditVideo).post(handlePostEditVideo);
videoRouter.get("/:id(\\d+)/delete", hanldeDeleteVideo);
videoRouter.get("/upload", handleUploadVideo);

export default videoRouter;
