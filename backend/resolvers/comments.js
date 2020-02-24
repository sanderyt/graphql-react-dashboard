const { UserInputError, AuthenticationError } = require("apollo-server");

const Post = require("../models/Post");
const checkAuth = require("../util/auth");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      //Check if user is authenticated.
      const { username } = checkAuth(context);

      //Validate if comment is empty or not.
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not be empty"
          }
        });
      }

      //Find the post with postId from payload.
      const post = await Post.findById(postId);

      //If post is present in MongoDB, post comment to MongoDB under comments array.
      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString()
        });
        await post.save();
        return post;
        //If post was not found, throw an error.
      } else throw new UserInputError("Post not found");
    },
    async deleteComment(_, { postId, commentId }, context) {
      //Get user from authentication
      const { username } = checkAuth(context);
      //Find post by its ID
      const post = await Post.findById(postId);

      //If the post exists, find its index in the array in MongoDB
      if (post) {
        const commentIndex = post.comments.findIndex(c => c.id === commentId);

        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Post not found");
      }
    },
    async likePost(_, { postId }, context) {
      const { username } = checkAuth(context);

      const post = await Post.findById(postId);

      if (post) {
        if (post.likes.find(like => like.username === username)) {
          //Post already likes by user, unlike it
          post.likes = post.likes.filter(like => like.username !== user);
          await post.save();
        } else {
          //Not liked, like post
          post.likes.push({
            username,
            createdAt: new Date().toISOString()
          });
        }
        await post.save();
        return post;
      } else throw new UserInputError("Post is not found");
    }
  }
};
