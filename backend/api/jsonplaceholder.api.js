import axios from "axios";
import asyncHandler from "express-async-handler";

const url = "https://jsonplaceholder.typicode.com";

export const getCommentsUrl = asyncHandler(async (req, res) => {
	const response = await axios.get(`${url}/comments`);
	const data = JSON.stringify(response.data);

	if (data) {
		return JSON.parse(data);
	} else throw "No data";
});

export const getPostsUrl = asyncHandler(async (req, res) => {
	const response = await axios.get(`${url}/posts`);
	const data = JSON.stringify(response.data);

	if (data) {
		return JSON.parse(data);
	} else throw "No data";
});
