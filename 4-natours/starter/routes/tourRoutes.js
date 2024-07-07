const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

// router.param('id', tourController.checkID);

const { createTour } = tourController;
const { getTour } = tourController;
const { updateTour } = tourController;
const { getAllTours } = tourController;
const { deleteTour } = tourController;
const { aliasTopTours } = tourController;
const { getTourStats } = tourController;
const { getMonthlyPlan } = tourController;

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back 400 (bad request)

// Add it to the post handler stack

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);

router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route(`/`).get(getAllTours).post(createTour);

router.route(`/:id`).get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
