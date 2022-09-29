import express from "express";

import {
	getCommentsByPost,
	getPost,
	getPosts,
} from "../controllers/posts.controller.js";

const postRouter = express.Router();

postRouter.get("/posts", getPosts);
postRouter.get("/posts/:id", getPost);
postRouter.get("/posts/:id/comments", getCommentsByPost);

export default postRouter;
