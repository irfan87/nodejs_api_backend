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

// will fetch comments from each post
// for instance, post1 -> [comment1, comment2, comment3, etc...]
export const getCommentsByPost = asyncHandler(async (req, res) => {
	const postId = req.params.id;
	const response = await axios.get(`${url}/posts/${postId}/comments`);
	const data = await response.data;

	res
		.status(200)
		.json({ message: `total of comments: ${data.length}`, ...data });
});
