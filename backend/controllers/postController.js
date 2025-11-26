const { postSchema } = require('../middlewares/validator');
const Post = require('../models/postModel');
const User = require('../models/userModel');


exports.getAllPosts = async (req, res) => {
    const posts = await Post.find();
    if(!posts)
        return res.status(501).json({message: 'No posts found'});

    return res.status(200).json(posts);
}

exports.getPosts = async (req, res) => {
    const { userId } = req.params;

    const existingUser = await User.findOne({ userId: userId });
    if (!existingUser)
        return res.status(404).json({message: 'User not found'});

    const posts = await Post.find({userId: userId}).sort({createdAt: -1});
    if(!posts)
        return res.status(501).json({message: 'No posts found'});

    return res.status(200).json(posts);
}

exports.createPost = async (req, res) => {
    const { userId, body } = req.body;

    const existingUser = await User.findById({_id: userId});
    if (!existingUser)
        return res.status(404).json({message: 'User not found'});

    console.log(`The user ID: ${userId} and the body ${body}`)

    const response = postSchema.validate({ userId: userId, body: body });
    if(!response.ok)
        return res.status(400).json(response.error);

    const savedUser = await Post.create({
        userId: userId,
        body: body
    })
    if(!savedUser)
        return res.status(501).json({message: 'Post not created'});
    return res.status(200).json(savedUser);
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