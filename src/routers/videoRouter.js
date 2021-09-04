import express from "express";

const videoRouter = express.Router();

const hanldeWatchVideo = (req, res) => {
  return res.send("Watch Video");
};

videoRouter.get("/watch", hanldeWatchVideo);

export default videoRouter;
