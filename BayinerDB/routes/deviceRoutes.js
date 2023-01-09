const express = require('express');
const deviceController = require('./../controllers/deviceController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.param('id', deviceController.checkID);

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    deviceController.getAllDevices
  )
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    deviceController.createDevice
  );

router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    deviceController.getDevice
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    deviceController.updateDevice
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    deviceController.deleteDevice
  );

module.exports = router;
