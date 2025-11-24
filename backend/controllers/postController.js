const { postSchema } = require('../middlewares/validator');
const { Post } = require('../models/postModel');


exports.getAllPosts = async (req, res) => {
    const posts = await Post.find();
    if(!posts)
        return res.status(501).json({message: 'No posts found'});

    return res.status(200).json(posts);
}


exports.createPost = async (req, res) => {
    const { userId, postBody } = req.body;

    const response = postSchema.validate({userId, postBody});
    if(!response.ok)
        return res.status(400).json(response.error);

    const savedUser = await Post.create({
        userId: userId,
        body: postBody
    })
    if(!savedUser)
        return res.status(501).json({message: 'Post not created'});
    return res.status(200).json(response);
}


exports.findById = async (req, res) => {
    const { id } = req.params;

    const post = await Post.findById({_id: id});
    if(!post)
        return res.status(404).json({message: 'Post not found'});

    return res.status(200).json(post);
}


exports.deletePost = async (req, res) => {
    const { id } = req.params;

    const response = await Post.deleteOne({_id: id});
    if(!response.ok)
        return res.status(501).json({message: 'Post was not deleted'});

    return res.status(200).json({message: 'Post deleted successfully'});
}


exports.deleteAllPosts = async (req, res) => {
    const { userId } = req.params;

    const response = await Post.deleteMany({userId: userId});
    if(!response.ok)
        return res.status(501).json({message: 'Posts were not deleted'});

    return res.status(200).json({message: 'Posts deleted successfully'});
}


exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { postBody } = req.body;

    const post = await Post.findOne({_id: id});
    if(!post)
        return res.status(404).json({message: 'Post not found'});

    post.body = postBody;
    await post.save();
    return res.status(200).json(
        {message: 'Post updated successfully'}
    )
}

exports.likePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    if(!post)
        return res.status(404).json({message: 'Post not found'});

    post.like++;
    await post.save();
    return res.status(200).json(post);
}