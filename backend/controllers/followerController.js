const { User } = require("../models/userModel");
const { Follower } = require("../models/followerModel");


exports.createFollower = async (req, res) => {
    const { user_id } = req.body;

    const existingUser = await User.findById({userId: user_id});
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
