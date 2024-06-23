const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  console.log(`Tour id is ${val}`);
  next();
});

const { createTour } = tourController;
const { getTour } = tourController;
const { updateTour } = tourController;
const { getAllTours } = tourController;
const { deleteTour } = tourController;

router.route(`/`).get(getAllTours).post(createTour);

router.route(`/:id`).get(getTour).patch(updateTour).patch(deleteTour);

module.exports = router;
