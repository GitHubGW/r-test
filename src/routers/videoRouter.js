import express from "express";
import { hanldeVideo, handleEditVideo, hanldeDeleteVideo, handleUploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id", hanldeVideo);
videoRouter.get("/:id/edit", handleEditVideo);
videoRouter.get("/:id/delete", hanldeDeleteVideo);
videoRouter.get("/upload", handleUploadVideo);

export default videoRouter;
