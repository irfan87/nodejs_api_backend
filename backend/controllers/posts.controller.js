import asyncHandler from "express-async-handler";
import axios from "axios";
import url from "../api/jsonplaceholder.api.js";

// will fetch all posts
export const getPosts = asyncHandler(async (req, res) => {
	const response = await axios.get(url);
	const data = await response.data;

	res.status(200).json(data);
});

// will fetch a single post with ID
export const getPost = asyncHandler(async (req, res) => {
	const postId = req.params.id;
	const response = await axios.get(`${url}/${postId}`);
	const data = await response.data;

	res.status(200).json(data);
});

// will fetch comments from each post
// for instance, post1 -> [comment1, comment2, comment3, etc...]
export const getCommentsByPost = asyncHandler(async (req, res) => {
	const postId = req.params.id;
	const response = await axios.get(`${url}/${postId}/comments`);
	const data = await response.data;

	res.status(200).json(data);
});
