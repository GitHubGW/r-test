import express from "express";
import { hanldeVideo, handleEditVideo, hanldeDeleteVideo, handleUploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();

// Regular Expression
// (\w+): All String, Number
// (\d+): Only Number
videoRouter.get("/:id(\\d+)", hanldeVideo);
videoRouter.get("/:id(\\d+)/edit", handleEditVideo);
videoRouter.get("/:id(\\d+)/delete", hanldeDeleteVideo);
videoRouter.get("/upload", handleUploadVideo);

export default videoRouter;
