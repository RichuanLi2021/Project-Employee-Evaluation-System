const express = require('express');
const { fetchAllEmployees } = require('../controllers/employeeController');
const router = express.Router();

router.get('/', fetchAllEmployees);

module.exports = router;