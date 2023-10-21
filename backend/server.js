import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

///register Route
app.use("/api/auth", authRoutes);

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is Listening on ${PORT}`.bgMagenta.white);
    });
  })
  .catch((err) => {
    console.log(`DataBase Connection Failed Server not Started`.bgRed.white);
    console.log(err);
  });
