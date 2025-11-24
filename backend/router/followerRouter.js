const express = require('express');
const followerController = require("../controllers/followerController");
const router = express.Router();


router.post('/create/follower', followerController.createFollower);

module.exports = router;