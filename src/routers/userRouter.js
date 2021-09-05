import express from "express";
import { handleUser, handleEditUser, handleDeleteUser, handleLogoutUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", handleUser);
userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", handleDeleteUser);
userRouter.get("/logout", handleLogoutUser);

export default userRouter;
