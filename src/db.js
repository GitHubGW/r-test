import mongoose from "mongoose";

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/youtube");

const mongooseConnection = mongoose.connection;

const handleConnectDB = () => {
  console.log("🌈 Connected to MongoDB");
};

const handleDisconnectDB = () => {
  console.log("🌪 Disconnected to MongoDB");
};

const handleErrorDB = (error) => {
  console.log("❌ DB Error", error);
};

// Handle Connect, Disconnect, Error
mongooseConnection.once("connected", handleConnectDB);
mongooseConnection.on("disconnected", handleDisconnectDB);
mongooseConnection.on("error", handleErrorDB);
