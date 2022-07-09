import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 7000;
import UserRoutes from "./routes/userRoute.js";

//Cors Policy
app.use(cors());

//JSON
app.use(express.json());

//Load Route
app.use("/api/user", UserRoutes);

app.listen(port, () => {
  console.log("Server started at " + port);
});
