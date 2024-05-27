import express from "express";
import cors from "cors";
import UserRouter from "./routes/user";
import PostRouter from "./routes/posts";

const app = express();
const port: number = 8080;

app.use(express.json());
app.use(cors());

app.use(UserRouter);
app.use(PostRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
