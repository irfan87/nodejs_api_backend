import asyncHandler from "express-async-handler";
import { getCommentsUrl, getPostsUrl } from "../api/jsonplaceholder.api.js";

export const getTopPosts = asyncHandler(async (req, res) => {
	const get_comments = await getCommentsUrl();
	const get_posts = await getPostsUrl();

	try {
		// reduce the comments of Top Posts by postId
		const comments = get_comments.reduce((result, commentItem) => {
			if (!result[commentItem.postId]) {
				result[commentItem.postId] = 0;
			}
			result[commentItem.postId] += 1;

			return result;
		}, {});

		// map the post's comments, by using postId
		const mapPostComments = Object.keys(comments)
			.map((postId) => [postId, comments[postId]])
			.sort((a, b) => b[1] - a[1]);

		// push posts into array
		const topPosts = [];

		for (const topPostsComment of mapPostComments) {
			const post = get_posts.find((item) => item.id === +topPostsComment[0]);

			if (post) {
				topPosts.push({
					post_id: +topPostsComment[0],
					post_title: post.title,
					post_body: post.body,
					total_number_of_comments: topPostsComment[1],
				});
			}
		}

		res.status(200).json({ topPosts: topPosts });
	} catch (error) {
		throw new Error(error.message);
	}
});
