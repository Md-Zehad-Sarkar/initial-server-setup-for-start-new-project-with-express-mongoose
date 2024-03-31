import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./app/config";
export const port = config.Port || 5000;

export const app: Application = express();

//middleware
app.use(cors());
app.use(express.json()); // parser

app.get("/", (req: Request, res: Response) => {
  res.json({
    Server_Running: true,
    Message: "Express server are running",
  });
});

app.listen(port, () => {
  console.log(
    `server are running on http://localhost:${port} time:${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`
  );
});
