
const { signupSchema} = require('../middlewares/validator');
const { doHash } = require("../middlewares/hasher");
const User = require("../models/userModel");

exports.signin = (req, res) => {
    res.json({'message':'This is the router in authController'});

    try{
        console.log('This is the try block');
        res.send('This is the response' + res.status(200));
    } catch (err){
        console.log(err);
    }
}

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    try{
     const {error} = signupSchema.validate({ email, password });

        if(error){
             console.log(error.details[0].message);
             return res.status(400)
                 .send(error.details[0].message);
         }
         let existingUser = await User.findOne({ email });

         if(existingUser){
             return res.status(401).json({succes: false, 'message': 'User already exists'});
         }
         const hashedPassword = doHash(password, 12);

         const savedUser = await new User({
             email,
             password: hashedPassword
          }).save();

        const responseUser = {
            id: savedUser.id,
            email: savedUser.email
        };
        return res.status(201).json({
            success: true,
            user: responseUser
        });
     } catch (err){
         console.log(err.message);
     }
      res.json({'message': 'This is the router in signup from authController'});
}