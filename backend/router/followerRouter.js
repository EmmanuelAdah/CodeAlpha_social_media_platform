const express = require('express');
const followerController = require("../controllers/followerController");
const router = express.Router();


router.post('/create/:id', followerController.createFollower);
router.get('/get/:id', followerController.getFollowers);
router.get('/getById/:id', followerController.findFollowerById);
router.delete('/delete/:id', followerController.deleteFollower);
router.delete('/delete/all/:id', followerController.deleteFollowers)

module.exports = router;