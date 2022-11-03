import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./src/Routers/Router";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api", router);

//handle other url errors
app.all("*", (req, res, next) => {
  const error = new Error(`Can not find ${req.originalUrl} on this server!`);
  error.statusCode = 404;
  error.flag = true;
  return next(error.message);
});

export default app;
