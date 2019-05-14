
const express = require('express');
const router = express.Router();
//const User = require('../models/User');
//const validateLoginInput = require('../validation/login');
const authController = require('../controller/index');
//const data = require('../users/users')

router.post('/authentica',authController.authenticate);

router.get('/StudenList',authController.getStudens);

router.get('/:id',authController.getOneStudens);

router.post('/addStuden',authController.postStuden);

router.delete('/:id',authController.deleteStuden);

router.put('/:id',authController.putStuden);




module.exports = router;