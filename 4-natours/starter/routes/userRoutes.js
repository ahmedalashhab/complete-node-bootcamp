const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

const { getAllUsers } = userController;
const { createUser } = userController;
const { getUser } = userController;
const { updateUser } = userController;
const { deleteUser } = userController;

router.route(`/`).get(getAllUsers).post(createUser);

router.route(`/:id`).get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
