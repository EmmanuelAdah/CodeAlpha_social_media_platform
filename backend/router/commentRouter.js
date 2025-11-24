const express = require('express');
const commentController = require("../controllers/commentController");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.post('/create/comment', commentController.createComment);
router.get('/comment/get', commentController.getComments);
router.get('/comment/get/:id', commentController.getCommentById);
router.patch('/comment/update/:id', commentController.updateComment);
router.delete('/delete/:id', commentController.deleteComment);
router.patch('/comment/like/:id', commentController.likeComment);