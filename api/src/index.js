const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

require("dotenv").config();

const APP_NAME = process.env.APP_NAME;
const POST_LISTS = process.env.POST_LISTS.split(",");

app.use(cors());

app.get("/", async (req, res) => {
	console.log(`Hello from ${APP_NAME}`);
	res.send({
		name: APP_NAME,
	});
});

app.get("/posts", async (req, res) => {
	console.log(`Hello from ${APP_NAME} with route /posts`);
	res.send({
		name: APP_NAME,
		posts: POST_LISTS,
	});
});

app.get("/:slug", async (req, res) => {
	const slug = req.params.slug;
	console.log(`Hello from ${APP_NAME} with route ${slug}`);
	res.send({
		name: APP_NAME,
		route: `/${slug}`,
	});
});

app.listen(port, () => {
	console.log(`Sample app listening on port ${port}`);
});
