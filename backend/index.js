import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(
//   cors({
//     origin: "https://abhihsek.pro",
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: "https://abhihsek.pro", // Allow your production frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
    credentials: true, // Allow credentials (e.g., cookies, authentication)
  })
);

app.options("*", cors());
// ROUTES
app.use("/", (req, res) => {
  res.send("Hello from server");
});
app.use("/api/v1/user", userRoutes);

// MONGOOSE SETUP
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "abhishekpanwarrr",
    });
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
export default app;
