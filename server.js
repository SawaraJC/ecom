import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

//configure env
dotenv.config();
//database config
connectDB();
//rest objects
const app = express();
//middlewares
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/v1/auth", authRoutes);
//rest api
app.get("/", (req, res) => {
  res.send("<hi><b>Welcome to our website</b></hi>");
});
//PORT
const PORT = process.env.PORT || 8080; //react runs on 8080 port  || 8080 is written for worst case
//run listen
app.listen(PORT, () => {
  console.log(
    `server is running on mode ${process.env.DEV_MODE} on port ${PORT}`.bgCyan
      .white
  );
});
