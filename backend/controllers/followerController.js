const  User  = require("../models/userModel");
const Follower = require("../models/followerModel");


exports.createFollower = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    const existingUser = await User.findById(id);
    console.log(existingUser.message);
    if (!existingUser)
            return res.status(400).json({message: 'User not found'});

    const {error, value} = await Follower.create({
        userId: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        image: existingUser.image,
    });
    console.log(value);

    if (error)
        return res.status(400).json({message: error.message});

    return res.status(201).json({value});
}

exports.getFollowers = async (req, res) => {
    const { userId } = req.params;

    const followers = await Follower.find({userId: userId});
    if(!followers)
        return res.status(404).json({message: 'No followers found'});

    return res.status(200).json(followers);
}

exports.findFollowerById = async (req, res) => {
    const { id } = req.params;

    const follower = await Follower.findById({_id: id});
    if(!follower)
        return res.status(404).json({message: 'Follower not found'});

    return res.status(200).json(follower);
}

exports.deleteFollower = async (req, res) => {
    const { id } = req.params;

    const follower = await Follower.findByIdAndDelete({_id: id});
    if(!follower)
        return res.status(404).json({message: 'Follower not found'});

    return res.status(200).json({message: 'Follower deleted successfully'});
}

exports.deleteFollowers = async (req, res) => {
    const { userId } = req.params;

    // const followers = await Follower.find({userId: userId});
    // if(!followers)
    //     return res.status(404).json({message: 'Followers not found'});

    const response = await Follower.deleteMany({userId: userId});
    if(!response.ok)
        return res.status(501).json({message: 'Followers were not deleted'});

    return res.status(200).json({message: 'Followers deleted successfully'});
}
