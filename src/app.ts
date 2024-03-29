import express from "express";
import { v1Router } from "./v1/routers";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1", v1Router);

export { app };
