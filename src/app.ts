import express from "express";
import cors from "cors";
const port = 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json()); // parser

app.get("/", (req, res) => {
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
