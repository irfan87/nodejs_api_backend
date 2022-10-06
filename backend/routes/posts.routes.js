import express from "express";

import { getTopPosts } from "../controllers/posts.controller.js";

const postRouter = express.Router();

postRouter.get("/top/posts", getTopPosts);
// postRouter.get("/posts/:id", getPost);
// postRouter.get("/comments", getComments);
// postRouter.get("/comments/search/:key", searchComment);

export default postRouter;
