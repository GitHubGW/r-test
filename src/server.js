import express from "express";
import morgan from "morgan";
import "./db";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();

app.disable("x-powered-by");
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); // Express Application이 form안에 input에 입력한 value값들을 req.body를 통해 가져올 수 있도록 함
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`🔥 http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
