const express = require('express');
const commentController = require("../controllers/commentController");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.post('/create', commentController.createComment);
router.get('/get/all', commentController.getComments);
router.get('/find/:id', commentController.getCommentById);
router.patch('/update/:id', commentController.updateComment);
router.delete('/delete/:id', commentController.deleteComment);
router.delete('/deleteAll', commentController.deleteComments);
router.patch('/comment/like/:id', commentController.likeComment);

module.exports = router;