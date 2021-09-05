import express from "express";
import { handleHome, handleJoin, handleLogin, handleSearch } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);
globalRouter.get("/search", handleSearch);

export default globalRouter;
