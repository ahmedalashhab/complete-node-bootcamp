const express = require('express');
const tourController = require('./../controllers/tourController');
const {checkBody} = require("../controllers/tourController");

const router = express.Router();

router.param('id', tourController.checkID)

const {createTour} = tourController;
const {getTour} = tourController;
const {updateTour} = tourController;
const {getAllTours} = tourController;
const {deleteTour} = tourController;

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back 400 (bad request)


// Add it to the post handler stack

router.route(`/`).get(getAllTours).post(checkBody, createTour);

router.route(`/:id`).get(getTour).patch(updateTour).patch(deleteTour);

module.exports = router;
