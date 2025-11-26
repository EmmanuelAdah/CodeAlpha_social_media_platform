const Comment = require('../models/commentModel');
const User = require('../models/userModel');
const Post = require('../models/postModel');
const { commentSchema} = require("../middlewares/validator");

exports.createComment = async (req, res) => {
    const { postId, userId, comment } = req.body;

    try {
        const { error } = await commentSchema.validate({postId, userId, comment});
        if (error) {
            return res.status(400).json({message: error.message});
        }
        const existingUser = await User.findById({userId: userId});
        if (existingUser)
            return res.status(400).json({message: 'No user found'});

        const existingPost = await Post.findById({postId: postId});
        if (!existingPost)
            return res.status(400).json({message: 'Post not found'});

        await Comment.create({
            postId: postId,
            userId: userId,
            username: existingUser.username,
            comment: comment,
        })
        res.status(200).json('Comment saved successfully')
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

exports.getComments = async (req, res) => {
    const { postId } = req.params;
    const comments = await Comment.find({postId: postId});
    if(!comments)
        return res.status(404).json({message: 'No comments found'});

    return res.status(200).json(comments);
}

exports.getCommentById = async (req, res) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if(!comment)
        return res.status(404).json({message: 'Comment not found'});
    return res.status(200).json(comment);
}

exports.updateComment = async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    const commentToUpdate = await Comment.findById(id);
    if(!commentToUpdate)
        return res.status(404).json({message: 'Comment not found'});

    commentToUpdate.comment = comment;
    await commentToUpdate.save();
    return res.status(200).json({message: 'Comment updated successfully'});
}

exports.deleteComment = async (req, res) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if(!comment)
        return res.status(404).json({message: 'Comment not found'});

    await comment.remove();
    return res.status(200).json({message: 'Comment deleted successfully'});
}

exports.deleteComments = async (req, res) => {
    const { postId } = req.params;

    const comment = await Comment.find({postId: postId});
    if(!comment)
        return res.status(404).json({message: 'Comment not found'});

    await comment.remove();
    return res.status(200).json({message: 'Comment deleted successfully'});
}

exports.likeComment = async (req, res) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if(!comment)
        return res.status(404).json({message: 'Comment not found'});

    comment.like += 1;
    const savedLike = await comment.save();
    return res.status(200).json(savedLike);
}