import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => {
  return res.send("Edit User");
};

userRouter.get("/edit", handleEditUser);

export default userRouter;
