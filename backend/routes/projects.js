const express = require('express');
const { fetchAllProjects } = require('../controllers/projectController');
const router = express.Router();

router.get('/', fetchAllProjects);

module.exports = router;