import express from "express";
import CookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import "./assossiations.js";
import "./config.js";
import { userRouter } from "./routes/userRoutes.js";
import { productRouter } from "./routes/productRoutes.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(CookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/user", userRouter);
app.use("/product", productRouter);
app.listen(process.env.PORT, () => {
  console.log(`Listenning on port ${process.env.PORT}`);
});
