import express from "express";
import PostsService from "../services/postsService";

const PostRouter = express.Router();

const postService = new PostsService("posts");

PostRouter.post("/:slug/post/create", async (req, res) => {
  const date = Date();

  const doc = postService.createPos({
    owner: req.params.slug,
    date: `${date}`,
    ...req.body,
  });

  res.status(200).json(doc);
});

export default PostRouter;
