import asyncHandler from "express-async-handler";
import axios from "axios";

import url from "../api/jsonplaceholder.api.js";

// will fetch all posts
export const getPosts = asyncHandler(async (req, res) => {
	const response = await axios.get(`${url}/posts`);
	const data = await response.data;

	res.status(200).json(data);
});

// will fetch a single post with ID
export const getPost = asyncHandler(async (req, res) => {
	const postId = req.params.id;
	const response = await axios.get(`${url}/posts/${postId}`);
	const data = await response.data;

	res.status(200).json(data);
});

// will fetch the comments only
export const getComments = asyncHandler(async (req, res) => {
	const response = await axios.get(`${url}/comments`);
	const data = await response.data;

	res
		.status(200)
		.json({ message: `total of comments: ${data.length}`, ...data });
});

// search comments for each post, with postId, commentId, email or title
export const searchComment = asyncHandler(async (req, res) => {
	const keys = req.params.key;

	const response = await axios.get(`${url}/comments/?postId=${keys}`);
	const data = await response.data;

	res
		.status(200)
		.json({ message: `total of comments: ${data.length}`, data: { ...data } });
});
