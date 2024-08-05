const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.param('id', tourController.checkID);

const {
  createTour,
  getTour,
  updateTour,
  getAllTours,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = tourController;

const { protect, restrictTo } = authController;

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back 400 (bad request)

// Add it to the post handler stack

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);

router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route(`/`).get(protect, getAllTours).post(createTour);

router
  .route(`/:id`)
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
