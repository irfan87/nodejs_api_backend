import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import postRouter from "./routes/posts.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", postRouter);

app.listen(PORT, (req, res) => {
	console.log(`Running on port ${PORT}`);
});
