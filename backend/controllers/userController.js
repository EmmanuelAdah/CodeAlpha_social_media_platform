const User = require("../models/userModel");
const cloudinary = require("../middlewares/cloudinaryConfig");


exports.getUserById = async (req, res) => {
    const { id } = req.params;

    const existingUser = await User.findById(id);
    if (!existingUser)
        return res.status(404).json({message: 'User not found'});

    return res.status(200).json({ existingUser });
}

exports.allUsers = async (req, res) => {
    const allUsers = await User.find();
    if (allUsers.length === 0)
        return res.status(404).json({message: 'User not found'});

    return res.status(200).json(allUsers);
}

exports.findByUsername = async (req, res) => {
    const { username } = req.params;

    const existingUser = await User.findOne({username: username});
    if (!existingUser)
        return res.status(404).json({message: 'User not found'});

    return res.status(200).json(existingUser);
}

exports.findByEmail = async (req, res) => {
    const { email } = req.params;

    const existingUser = await User.findOne({email: email});
    if (!existingUser)
        return res.status(404).json({message: 'User not found'});
    return res.status(200).json(existingUser);
}

exports.updateImage = async (req, res) => {
    const { userId, filePath } = req.body;

    const existingUser = await User.findOne({_id: userId});
    if (!existingUser)
        return res.status(404).json({message: 'User not found'});

     try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "code_alpha/profile_images",
        });
        if (result.error)
            return res.status(500).json({ error: result.error.message });

        existingUser.image = result.secure_url;
        await existingUser.save();
        console.log('The image url: ', result.secure_url)

        return res.status(200).json({message: 'Image updated successfully'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}