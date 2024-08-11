const express = require('express');
const { handleAssignments } = require('../controllers/assignmentController');
const router = express.Router();

router.post('/', handleAssignments);

router.get('/', handleAssignments);

module.exports = router;