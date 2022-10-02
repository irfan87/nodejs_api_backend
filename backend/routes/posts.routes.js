import express from "express";

import {
	getComments,
	getPost,
	getPosts,
	searchComment,
} from "../controllers/posts.controller.js";

const postRouter = express.Router();

postRouter.get("/posts", getPosts);
postRouter.get("/posts/:id", getPost);
postRouter.get("/comments", getComments);
postRouter.get("/comments/search/:key", searchComment);

export default postRouter;
