import express from "express";

const PORT = 4000;

const app = express();

const checkUrlMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("Home");
};

const handleLogin = (req, res) => {
  return res.send("Login");
};

app.use(checkUrlMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`🔥 http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
