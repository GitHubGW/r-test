import express from "express";
import { handleUser, handleEditUser, handleDeleteUser, handleLogoutUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", handleDeleteUser);
userRouter.get("/logout", handleLogoutUser);
userRouter.get("/:id", handleUser);

export default userRouter;
