import { Router } from "express";
import { authRouter } from "./auth.router";
import { usersRouter } from "./users.router";
import { errorHandler } from "../middlewares/error.middleware";
import { logRequest } from "../middlewares/log.middleware";

const v1Router = Router();
v1Router.use(logRequest);
v1Router.use("/auth", authRouter);
v1Router.use("/users", usersRouter);
v1Router.use(errorHandler);

export { v1Router };
