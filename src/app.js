import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

const corsOpts = {
  origin: "*",
  methods: ["*"],
  // methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["*"],
  // allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOpts));

dotenv.config();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static("public"));
app.use(
  "/profile",
  express.static(path.resolve("src", "assets", "user-image"))
);

import statusOMRouter from "@src/modules/statusOM/statusOM.router";
import Integrated_API from "@src/modules/integrated-api/integrated-api.router";


// Admin routes
app.use("/api/v1/private", statusOMRouter);
app.use("/api/v1/integrated", Integrated_API);

export default app;
