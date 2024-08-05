const express = require('express');
const userController = require('./../controllers/userController');
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
} = require('../controllers/authController');

const router = express.Router();

const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
} = userController;

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);

router.patch('/resetPassword/:token', resetPassword);
router.patch('/updateMyPassword', protect, updatePassword);
router.patch('/updateMe', protect, updateMe);

router.delete('/deleteMe', protect, deleteMe);

router.route(`/`).get(getAllUsers).post(createUser);
router.route(`/:id`).get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
